const express = require("express");
const {
  getAllUsers,
  signup,
  login,
  getProfileById,
  accountDelete,
} = require("./user.controller");

const routerUser = express.Router();

routerUser.get("/", getAllUsers);

routerUser.post("/signup", signup).post("/login", login);
routerUser.get("/profile/:id", getProfileById);

routerUser.delete("/accountDelete/:id", accountDelete);

module.exports = routerUser;
