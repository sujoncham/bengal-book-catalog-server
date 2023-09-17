const express = require("express");
const {
  getAllCheckout,
  addCheckout,
  getCheckById,
  deleteCheckout,
} = require("./checkout.controller");

const checkoutRouter = express.Router();

checkoutRouter.get("/checkout", getAllCheckout);
checkoutRouter.post("/addCheckout", addCheckout);
checkoutRouter.get("/checkoutDetail/:id", getCheckById);

checkoutRouter.delete("checkout/:id", deleteCheckout);

module.exports = checkoutRouter;
