const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    cash: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    DeliCharge: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    products: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to your product model
          required: true,
        },
        title: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
