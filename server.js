const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");

const connectDb = require("./config/config");

//dotenv config

dotenv.config();

connectDb();

//rest object
const app = express();

//middle wares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
// app.get("/", (req, res) => {
//   res.send("<h1>jhjhhh</h1>");
// });

app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//port

const PORT = process.env.PORT || 8080;

//listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
