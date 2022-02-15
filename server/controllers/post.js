const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = (req, res) => {
  res.send("This is post");
};

const createPosts = (req, res) => {
  const post = req.body;

  const newPost = new res.send(req.body);
};

module.exports = { getPosts, createPosts };
