const express = require('express');
const { Comment, User } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');

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
apiUsersRouter.route('/:id').post(verifyAccessToken, async (req, res) => {
  try {
    console.log('нипон');
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
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
