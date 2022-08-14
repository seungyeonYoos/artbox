const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("main_video");
});

app.listen(port, () => console.log("✅ server connected to 8000 port."));
