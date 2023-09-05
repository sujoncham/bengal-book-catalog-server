const express = require("express");
const {
  getAllBook,
  addNewBook,
  getBookById,
  updateBookById,
  deleteBook,
} = require("./book.controller");

const bookRouter = express.Router();

bookRouter.get("/", getAllBook);
bookRouter.post("/addNewBook", addNewBook);
bookRouter.get("/book/:id", getBookById);
bookRouter.get("/bookUpdate/:id", updateBookById);
bookRouter.get("/:id", deleteBook);
