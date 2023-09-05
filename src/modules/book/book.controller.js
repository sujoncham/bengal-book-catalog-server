const Book = require("./book.model");

exports.getAllBook = async (req, res, next) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      status: "success",
      message: "books get successfully",
      data: books,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "books is not found",
      error: error,
    });
  }
};

exports.addNewBook = async (req, res, next) => {
  // console.log(req.body)
  const { filename } = req.file;
  const { title, description, price, status, author, published, genre, user } =
    req.body;

  let existUser;
  try {
    existUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!existUser) {
    return res.status(400).json({ message: "user not found" });
  }

  const newBook = new Book({
    title,
    description,
    price,
    status,
    author,
    published,
    genre,
    user,
    image: filename,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBook.save({ session });
    existUser.Book.push(newBook);
    await existUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    return res.send({
      status: "failed",
      message: "book is not created",
      error: error,
    });
  }
  return res.status(200).json({
    status: "success",
    message: "book created successfully",
    data: newBook,
  });
};

exports.updateBookById = async (req, res, next) => {
  try {
    const { title, description, image } = req.body;
    const bookId = req.params.id;
    const book = await Book.findByIdAndUpdate(bookId, {
      title,
      description,
      image,
    });

    return res.status(200).json({
      status: "success",
      message: "update by id successfully",
      data: book,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await book.findById(bookId);

    return res.status(200).json({
      status: "success",
      message: "get by id successfully",
      data: book,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBook = async (req, res, next) => {
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
