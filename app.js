const express = require("express");
const app = express();

app.set("views", __dirname);
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;




// app.get("/", (req, rew) => {

// })


app.listen(port, () => {
    console.log("server open: ", port);
})