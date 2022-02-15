const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post.js");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//MongoDb
mongoose
  .connect(process.env.MONGODB_SECRET)
  .then(() => {
    console.log("Successfully connnecting to mongoDB.");
  })
  .catch((e) => {
    console.log("Fail connect to mongodb.");
    console.log(e);
  });

//middleware

app.use(express.json({ limit: "2100000kb" }));
app.use(cors());
app.use("/post", postRoutes);

//Routes

app.get("/", (req, res) => {
  res.send("Hey there.");
});

// PORT

app.listen(PORT, (req, res) => {
  console.log(`Server is running on Port ${PORT}.`);
});
