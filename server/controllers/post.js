const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = (req, res) => {
  res.send("This is GET and POST page");
};

const createPosts = async (req, res) => {
  const post = req.body;
  console.log(post);

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(200).send(post);
    // res.send("Your request has been sent.  Thank you.");
  } catch (err) {
    console.log(err);
    res.status(404).send("Error. You need to call the owner!!");
  }
};

module.exports = { getPosts, createPosts };
