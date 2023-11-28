const express = require('express');
const { Achieve, User, UserAchieve } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');

const apiAcievesRouter = express.Router();

apiAcievesRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const achieves = await Achieve.findAll();
      res.json(achieves);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const achieve = await UserAchieve.create({
        ...req.body,
        userId: res.locals.user.id,
      });
      res.status(201).json(achieve);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiAcievesRouter.route('/:id').get(async (req, res) => {
  try {
    const quest = await UserAchieve.findAll({
      where: {
        userId: req.params.id,
      },
      include: User,
    });
    res.status(200).json(quest);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiAcievesRouter;
