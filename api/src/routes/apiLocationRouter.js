const express = require("express");
const { Image, Location, Comment } = require("../../db/models");
const verifyAccessToken = require("../midddlewares/verifyAccessToken");
const checkAuthor = require("../midddlewares/checkAuthor");

const apiLocationRouter = express.Router();

apiLocationRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const locations = await Location.findAll({
        include: [Image, Comment]

      });
      res.json(locations);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Location.create(req.body);
      const newLocation = await Location.findByPk(post.id);
      res.status(201).json(newLocation);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiLocationRouter
  .route("/:id")
  .get(verifyAccessToken, async (req, res) => {
    try {
      const location = await Location.findByPk(req.params.id, {
        include: Image,
      });
      res.status(200).json(location);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, checkAuthor, async (req, res) => {
    try {
      const post = await Location.findByPk(req.params.id);
      await post.update(req.body);
      const fixedLocation = await Location.findByPk(post.id, {
        include: Image,
      });
      res.status(200).json(fixedLocation);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiLocationRouter;
