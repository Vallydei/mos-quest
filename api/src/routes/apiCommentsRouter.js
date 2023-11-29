const express = require("express");
const { Comment, User } = require("../../db/models");
const verifyAccessToken = require("../midddlewares/verifyAccessToken");
const checkAuthor = require("../midddlewares/checkAuthor");

const apiCommentsRouter = express.Router();

apiCommentsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const comments = await Comment.findAll({
        include: User,
        order: [["createdAt", "ASC"]],
      });

      res.json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const comment = await Comment.create({
        ...req.body,
        userId: res.locals.user.id,
      });
      const commentWithAuthor = await Comment.findByPk(comment.id, {
        include: User,
      });
      res.status(201).json(commentWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, checkAuthor,  async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.body.id);
      await comment.update(req.body);
      const commentWithAuthor = await Comment.findByPk(comment.id, {
        include: User,
      });
      res.json(commentWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiCommentsRouter
  .route("/:id")
  .delete(verifyAccessToken,  checkAuthor, async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      await comment.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiCommentsRouter;
