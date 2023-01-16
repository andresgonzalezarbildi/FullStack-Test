const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");

//      DataBase
const connectDB = require("./config/db");

//      Load Config
dotenv.config({ path: "./config/config.env" });

//      Passport Config
require("./config/passport")(passport);

//      initialize database and app
connectDB();
const app = express();

//      Setting ejs
app.set("view engine", ".ejs");

//      Static folder
app.use(express.static(path.join(__dirname, "public")));

//      Routes
app.use("/", require("./routes/index"));
app.use("/second", require("./routes/second"));

//      Db connected
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
