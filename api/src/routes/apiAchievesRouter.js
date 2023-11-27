const express = require("express");
const { Achieve } = require("../../db/models");

const apiAcievesRouter = express.Router();

apiAcievesRouter.route("/").get(async (req, res) => {
  try {
    const achieves = await Achieve.findAll();
    res.json(achieves);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiAcievesRouter;
