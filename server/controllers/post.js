const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = (req, res) => {
  res.send("This is post");
};

const createPosts = async (req, res) => {
  const post = req.body;
  console.log(post);

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.send(post);
    // res.send("Your request has been sent.  Thank you.");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getPosts, createPosts };
