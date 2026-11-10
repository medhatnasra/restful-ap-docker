const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

const DB_USER = "root";
const DB_PASSWORD = "root";
const mongo = "mongo";

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${mongo}:27017/db_test?authSource=admin`;

mongoose.connect(URI).then(() => console.log("Connected.."));

app.listen(PORT, () => {
  console.log(`app is running .. on PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1> Api is working ....</h1>");
});
