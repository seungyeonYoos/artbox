
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.static("public"));
app.use("/static", express.static("public"));

const port = 8000;


app.get("/", (req, res) => {
  res.render("card_news");
});

app.listen(port, () => {
  console.log("server open: ", port);
});


