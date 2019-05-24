const mongoose = require("mongoose");
const express = require("express");
const db = require("./db/db")();

const API_PORT = 3001;

const app = express();

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
