const express = require("express");
const app = express();
const port = 6868;

// route
app.get("/", (req, res) => {
  return res.send("hello world");
});

app.listen(port, () => console.log("exaple app"));
