require("dotenv").config();
const { Comment } = require("../../db/models");

async function checkAuthor(req, res, next) {
  try {

    if (req.body.id) {
      const targetComment = await Comment.findByPk(Number(req.body.id));
      if (targetComment.userId !== res.locals.user.id) {
        return res
          .status(403)
          .send("You are not authorized to perform this action");
      }
    }
    if (req.params.id) {
      const targetComment = await Comment.findByPk(Number(req.params.id));
      if (targetComment.userId !== res.locals.user.id) {
        return res
          .status(403)
          .send("You are not authorized to perform this action");
      }
      // console.log(targetComment, req.body);
      // if (targetComment.userId !== res.locals.user.id) {
      //   return res
      //     .status(403)
      //     .send("You are not authorized to perform this action");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send("You are not authorized to perform this action");
  }
}

module.exports = checkAuthor;
