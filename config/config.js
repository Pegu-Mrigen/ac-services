const mongoose = require("mongoose");

require("colors");

//connect DB

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB is connected with ${con.connection.host} server`.bgGreen.black);
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.black);
    process.exit(1);
  }
};
//export

module.exports = connectDb;
