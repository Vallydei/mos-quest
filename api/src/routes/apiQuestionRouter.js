const express = require('express');
const { Question, Location } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');

const apiQuestionsRouter = express.Router();

apiQuestionsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Question.findAll({
        include: Location,
      });
      console.log(posts);
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Question.create(req.body);
      const postWithAuthor = await Question.findByPk(post.id);
      res.status(201).json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiQuestionsRouter.route('/:id').get(verifyAccessToken, async (req, res) => {
  try {
    const quest = await Question.findOne({
      where: {
        locationId: req.params.id,
      },
    });
    res.status(200).json(quest);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiQuestionsRouter;
