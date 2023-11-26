const express = require('express');
const { UserProgress, User } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');

const apiProgressRouter = express.Router();

apiProgressRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const userProgress = await UserProgress.findAll({
        include: User,
      });
      res.json(userProgress);
    } catch (error) {
      console.log('Ошибка получения прогресса');
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.body);
      const userProgress = await UserProgress.create(req.body);

      const userProgresswithUesr = await UserProgress.findByPk(
        userProgress.id,
        {
          include: User,
        }
      );
      res.status(201).json(userProgresswithUesr);
    } catch (error) {
      console.log('Ошибка создания прогресса');
      res.status(500).json(error);
    }
  });

  apiProgressRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const userProgress = await UserProgress.findAll({ where: {
        userId: req.params.id
      },
        include: User,
      });
      console.log('юс прог', userProgress);
      res.json(userProgress);
    } catch (error) {
      console.log('Ошибка получения прогресса');
      res.status(500).json(error);
    }
  })

module.exports = apiProgressRouter;
