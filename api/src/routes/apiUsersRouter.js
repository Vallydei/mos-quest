const sharp = require('sharp');
const fs = require('fs/promises');
const express = require('express');

const { Comment, User } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');
const { upload } = require('../midddlewares/multer');

const apiUsersRouter = express.Router();

apiUsersRouter.route('/').get(async (req, res) => {
  try {
    const users = await User.findAll({
      include: Comment,
      order: [['createdAt', 'DESC']],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
apiUsersRouter.route('/:id').post(upload.single('avatar'), async (req, res) => {
  console.log('нипон де файл1', req.body);
  console.log('нипон де файл', req.file);
  try {
    const user = await User.findByPk(req.body.id);

    let { avatar } = user;
    if (req.file) {
      avatar = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/img/${avatar}`, outputBuffer);
      // await fs.unlink(`./public/img/${user.avatar}`);
    }
    const { name, email } = req.body;
    await user.update({ name, email, avatar });
    const updatedUser = await User.findByPk(user.id);
    console.log('Ручка апдейта юзера', updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

apiUsersRouter.route('/:userId/comments').get(async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { userId: req.params.userId },
      include: User,
    });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiUsersRouter;
