const express = require("express");
const app = express();
const port = 6868;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);
//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log("exaple app"));
