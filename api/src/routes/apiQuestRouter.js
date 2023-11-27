const express = require('express');
const { Quest, Question} = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');
const checkAuthor = require('../midddlewares/checkAuthor');

const apiQuestRouter = express.Router();

apiQuestRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const quests = await Quest.findAll({
        include: Question,
        order: [[Question, 'id', 'ASC']],
      });
      res.json(quests);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Quest.create(req.body);
      const newQuest = await Quest.findByPk(post.id);
      res.status(201).json(newQuest);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiQuestRouter
  .route('/:id')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const quest = await Quest.findByPk(req.params.id, {
        include: Question,
      });
      res.status(200).json(quest);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, checkAuthor, async (req, res) => {
    try {
      const post = await Quest.findByPk(req.params.id);
      await post.update(req.body);
      const updatedQuest = await Quest.findByPk(post.id, {
        include: Question,
      });
      res.status(200).json(updatedQuest);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiQuestRouter;
