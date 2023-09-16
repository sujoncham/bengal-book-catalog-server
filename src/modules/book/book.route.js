const express = require("express");
const multer = require("multer");
const {
  getAllBook,
  addNewBook,
  getBookById,
  updateBookById,
  deleteBook,
  getCommentById,
} = require("./book.controller");

const bookRouter = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}-${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowd"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

bookRouter.get("/", getAllBook);
bookRouter.post("/addNewBook", upload.single("image"), addNewBook);
bookRouter.get("/bookDetail/:id", getBookById);
bookRouter.get("/bookUpdate/:id", updateBookById);
bookRouter.post("/comment/:id", getCommentById);
bookRouter.get("/:id", deleteBook);

module.exports = bookRouter;
