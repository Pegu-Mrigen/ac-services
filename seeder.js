const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/config");

const itemModel = require("./models/itemModel");
const items = require("./utils/data");
require("colors");
//config

dotenv.config();
connectDb();

//function seeder

const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);

    console.log(`All items added`.bgMagenta.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.bgRed.inverse);
    process.exit(1);
  }
};

importData();
