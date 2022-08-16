const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
    res.render("navbar");
    
});
app.listen(port,()=> {console.log("서버연결됐다.")});