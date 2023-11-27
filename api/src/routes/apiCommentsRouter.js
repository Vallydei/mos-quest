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
      console.log(req.body);
      const comment = await Comment.create({
        ...req.body,
        userId: res.locals.user.id,
        // locationId: res.params
      });
      const commentWithAuthor = await Comment.findByPk(comment.id, {
        include: User,
      });
      res.status(201).json(commentWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiCommentsRouter
  .route("/:id")
  .delete(verifyAccessToken, checkAuthor, async (req, res) => {
    try {
      const post = await Comment.findByPk(req.params.id);
      await post.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, checkAuthor, async (req, res) => {
    try {
      const post = await Comment.findByPk(req.params.id);
      await post.update(req.body);
      const postWithAuthor = await Comment.findByPk(post.id, {
        include: User,
      });
      res.json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiCommentsRouter;
