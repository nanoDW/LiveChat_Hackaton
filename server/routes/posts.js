const mongoose = require("mongoose");
const express = require("express");

const { Post, validatePost } = require("../models/post");
const posts = express.Router();

posts.get("/all/", async (req, res) => {
  console.log("test");
  const posts = await Post.find();
  console.log(posts);
  res.send(posts);
});

posts.get("/", async (req, res) => {
  const dateCurrent = new Date(Date.now());
  const dateWeekPast = new Date(
    dateCurrent.getTime() - 7 * 24 * 60 * 60 * 1000
  );
  console.log(dateCurrent);
  console.log(dateWeekPast);

  const posts = await Post.find({
    date: {
      $gte: dateWeekPast,
      $lte: dateCurrent
    }
  });
  console.log(posts);
  res.send(posts);
});

posts.post("/", async (req, res) => {
  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let post = new Post({
    user: req.body.user,
    date: req.body.date,
    text: req.body.text,
    attachment: req.body.attachment
  });
  post = await post.save();
  res.send(post);
});

posts.put("/", async (req, res) => {
  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  const post = await Post.findOneAndUpdate(
    {
      user: req.body.user,
      date: req.body.date
    },
    {
      text: req.body.text,
      attachment: req.body.attachment
    },
    { new: true, omitUndefined: true }
  );
  if (!post) {
    return res.status(404).send("Post with given properties was not found");
  }
  res.send(post);
});

module.exports = posts;
