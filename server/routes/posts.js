const mongoose = require("mongoose");
const express = require("express");
const LiveChatApi = require("livechatapi").LiveChatApi;

const { Post, validatePost } = require("../models/post");
const posts = express.Router();

const api = new LiveChatApi(
  "kamila.spodymek@gmail.com",
  "c73e145c22855a6775ad2424476c9b6f"
);

posts.get("/all/", async (req, res) => {
  //console.log("test");
  const posts = await Post.find();
  //console.log(posts);
  posts.forEach(post => {
    return (post.likesCount = post.likesCountArray.length);
  });
  //console.log(posts);
  res.send(posts);
});

posts.get("/", async (req, res) => {
  const dateCurrent = new Date(Date.now());
  const dateWeekPast = new Date(
    dateCurrent.getTime() - 7 * 24 * 60 * 60 * 1000
  );
  //console.log(dateCurrent);
  // console.log(dateWeekPast);

  const posts = await Post.find({
    date: {
      $gte: dateWeekPast,
      $lte: dateCurrent
    }
  });
  //console.log(posts);
  posts.forEach(post => {
    return (post.likesCount = post.likesCountArray.length);
  });
  //console.log(posts);
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

  await api.agents.get(req.body.user, async data => {
    post.name = data.name;
    post.avatar = data.avatar;

    post = await post.save();

    res.send(post);
  });
});

posts.put("/", async (req, res) => {
  /*  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message); */


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
  //console.log(post);
  post.likesCount = post.likesCountArray.length;
  //console.log(post);
  res.send(post);
});

posts.delete("/", async (req, res) => {
  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const post = await Post.findOneAndDelete({
    user: req.body.user,
    date: req.body.date
  });

  if (!post) {
    return res.status(404).send("Post with given properties was not found");
  }
  res.send(post);
});

posts.delete("/all/", async (req, res) => {
  const result = await Post.deleteMany();
  res.send(result);
});

posts.put("/like/", async (req, res) => {
  const post = await Post.findOne({
    user: req.body.user,
    date: req.body.date
  });

  //console.log(post);
  //console.log(post.likesCountArray.length);
  if (post.likesCountArray.length > 0) {
    validateLike(post, req.body.likeGiver);
  } else {
    post.likesCountArray.push(req.body.likeGiver);
    //console.log(`increased array: ${post.likesCountArray}`);
  }

  //console.log(post);

  post.likesCount = post.likesCountArray.length;
  //console.log(post);
  postSent = await post.save();

  res.send(postSent);
});

function validateLike(post, likeGiver) {
  if (post.likesCountArray.includes(likeGiver)) {
    const index = post.likesCountArray.indexOf(likeGiver);
    post.likesCountArray.splice(index, 1);
    //console.log(`reduced array: ${post.likesCountArray}`);
  } else {
    post.likesCountArray.push(likeGiver);
    //console.log(`increased array: ${post.likesCountArray}`);
  }
}

module.exports = posts;
