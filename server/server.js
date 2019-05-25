const mongoose = require("mongoose");
const express = require("express");
const db = require("./db/db")();
const posts = require("./routes/posts");

const API_PORT = 3001;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET");
  next();
});

app.use(express.json());
app.use("/api/posts", posts);

app.listen(API_PORT, () => console.log(`Listening to port ${API_PORT}...`));
