const express = require('express');
const bcrypt = require('bcrypt');
const { User, Confirm } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const jwtConfig = require('../config/jwtConfig');
const cookiesConfig = require('../config/cookiesConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const {
  mailer,
  generateConfirmationCode,
} = require('../middlewares/nodemailer');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(password, user.hashpass);
    if (!isValid) return res.status(400).json({ message: 'Invalid password' });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user: plainUser });
    res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

authRouter.post('/confirm', async (req, res) => {
  const confirmCode = generateConfirmationCode();
  try {
    const { email, password, name } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        hashpass: await bcrypt.hash(password, 10),
        confirmCode,
      },
    });
    if (!created)
      return res.status(400).json({ message: 'Email already exists' });

    if (created) {
      const message = {
        to: email,
        subject: 'Congratulations! You are successfully registered!',
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
        Данные вашей учётной записи:
        login: ${name}
        Ваш код подтверждения: ${confirmCode}`,
      };
      mailer(message);
    }

    mailer(email, confirmCode);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

authRouter.post('/signup', async (req, res) => {
  try {
    const { email, confirmCode } = req.body;
    const user = await User.findOne({
      where: {
        email,
        confirmCode,
      },
    });
    if (!user) res.status(401).json({ message: 'Wrong confirm code' });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user: plainUser });
    return res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

authRouter.post('/logout', (req, res) => {
  res.clearCookie(jwtConfig.refresh.name).sendStatus(200);
});

authRouter.get('/check', verifyRefreshToken, (req, res) => {
  res.json({ user: res.locals.user, accessToken: '' });
});

module.exports = authRouter;
