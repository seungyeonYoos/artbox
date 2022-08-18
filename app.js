const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
const videoList = ["0.mp4", "1.mp4", "2.mp4"];

// 전역으로 사용할 변수
var artist = ['고흐', '김영각', '김밥통'];
var era = ['원시', '고대', '중세', '근세', '근대', '현대'];
var style = ['르네상스', '매너리즘', '바로크', '낭만주의', '모더니즘'];
var year = ['1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
var data = [artist, era, style, year];
var category = ["artist", "era", "style", "year"];

app.get("/", (req, res) => {
  res.render("root_page", { videoList });
});

const listQnA = [
  {
    btn: "#1 어떻게 검색해볼 수 있나요?",
    content: "네이게이션 바의 목차대로 하나씩 살펴보시면 될꺼에요.",
  },
  {
    btn: "#2 어떻게 검색해볼 수 있나요?",
    content: "네이게이션 바의 목차대로 하나씩 살펴보시면 될꺼에요.",
  },
  {
    btn: "#3 어떻게 검색해볼 수 있나요?",
    content: "네이게이션 바의 목차대로 하나씩 살펴보시면 될꺼에요.",
  },
  {
    btn: "#4 아 보기 불편한데..",
    content: "네이게이션 바의 목차대로 하나씩 살펴보시면 될꺼에요.",
  },
];

app.get("/inquery", (req, res) => {
  res.render("inquery", { listQnA });
});

for (var i = 0; i < category.length; i++) { 
  data[4] = category[i];
  app.get("/" + category[i], (req, res) => {
    res.render("show_data.ejs", {data:data});
  });
}

app.listen(port, () => {
  console.log("Server open: ", port);
}); 
