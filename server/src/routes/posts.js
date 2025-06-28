import express from "express";
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("Post Route");
});

export default postRouter;
