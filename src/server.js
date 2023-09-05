const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DATA_URL, {
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
