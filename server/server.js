const express = require("express");
const LiveChatApi = require("livechatapi").LiveChatApi;
const db = require("./db/db")();
const posts = require("./routes/posts");
const path = require('path');

const API_PORT = process.env.PORT || 3001;


const app = express();


// serving frontend
app.use(express.static(path.join(__dirname, '../client/build')));

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

// testowanie działania API
const api = new LiveChatApi(
  "kamila.spodymek@gmail.com",
  "c73e145c22855a6775ad2424476c9b6f"
);

app.get("/agents", (req, res) => {
  api.agents.list(function(data) {
    res.send(data);
  });
});

app.get("/agents/email=:email", (req, res) => {
  api.agents.get(req.params.email, data => {
    res.send(data);
  });
});

app.listen(API_PORT, () => console.log(`Listening to port ${API_PORT}...`));
