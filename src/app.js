const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("I am responding from server");
});

module.exports = app;
