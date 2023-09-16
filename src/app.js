const express = require("express");
const cors = require("cors");
const bookRouter = require("./modules/book/book.route");
const routerUser = require("./modules/user/user.route");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", routerUser);

app.get("/", (req, res) => {
  res.send("I am responding from server");
});

module.exports = app;
