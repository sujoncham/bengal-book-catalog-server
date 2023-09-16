const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  published: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
  rating: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
