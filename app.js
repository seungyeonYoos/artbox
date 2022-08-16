const express = require("express");
const app = express();

app.set("views", __dirname);
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
    res.render("quick_search");
  });


app.listen(port, () => {
    console.log("server open: ", port);
})``