const express = require("express");
const logger = require("morgan");
const path = require("path");


const productRouter = require("./router")

const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(logger("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});
