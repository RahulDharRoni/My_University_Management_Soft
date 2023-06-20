import mongoose from "mongoose";
import app from "../src/app";
import config from "../src/config/index";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database Connected !");

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("not connect", err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
