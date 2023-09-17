const Checkout = require("./checkout.model");

exports.getAllCheckout = async (req, res) => {
  try {
    const checkouts = await Checkout.find();
    res.json(checkouts);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching checkout data." });
  }
};

// Route to create a new checkout record
exports.addCheckout = async (req, res) => {
  try {
    const newCheckout = new Checkout(req.body);
    const savedCheckout = await newCheckout.save();
    res.json(savedCheckout);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the checkout data." });
  }
};

exports.getCheckById = async (req, res) => {
  const checkoutId = req.params.id;

  try {
    const checkout = await Checkout.findById(checkoutId);
    if (!checkout) {
      return res.status(404).json({ error: "Checkout record not found." });
    }
    res.json(checkout);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the checkout record." });
  }
};

exports.deleteCheckout = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    await Book.findByIdAndRemove(bookId);

    return res.status(200).json({
      status: "success",
      message: "deleted blog by id successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "not deleted blog",
      error: error.message,
    });
  }
};
