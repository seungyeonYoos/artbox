const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;

// 전역으로 사용할 변수
var artist = ['고흐', '김영각', '김밥통'];
var era = ['원시', '고대', '중세', '근세', '근대', '현대'];
var style = ['르네상스', '매너리즘', '바로크', '낭만주의', '모더니즘'];
var year = ['1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
// var data = [artist, era, style, year];
var category = ["artist", "era", "style", "year"];
var data = {"artist":artist, "era":era, "style":style, "year":year};

app.get("/", (req, res) => {
  res.render("root_page");
});

app.get("/inquery", (req, res) => {
  res.render("inquery");
});



for (var i = 0; i < category.length; i++) {
  data["category"] = category[i];

  app.get("/" + category[i], (req, res) => {
    res.render("show_data", {data:data});
  });
} 



app.listen(port, () => {
  console.log("Server open: ", port);
}); 

