const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 5000;
const url = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.rqtzfhi.mongodb.net/bengalbook?retryWrites=true&w=majority`;

async function main() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log("my port is", port);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

main();
