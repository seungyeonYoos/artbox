const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
const videoList = ["0.mp4", "1.mp4", "2.mp4"];

// 전역으로 사용할 변수
var artist = ['고흐', '김영각', '김밥통', '마사치오', '보티첼리', '레오나르도 다 빈치', '미켈란젤로', '조르조네', '티티안', '조르지오 바사리', '라파엘로', '안토니오 코레지오', '한스 홀바인', '알브레히트 뒤러', '마티아스 그뤼네발트', '히에로니무스 보슈', '안니발 카라치', '라비니아 폰타나', '대 피테르 브뢰겔', '브론치노', '폰토르모', '엘 그레코', '파르미지아니노', '카라바조', '디에고 벨라스케스', '피터르 파우얼 루번스', '렘브란트', '아르테미시아 젠틸레스키', '귀도 레니', '장바티스트시메옹 샤르댕', '장앙투안 와토', '장오노레 프라고나르', '엘리자베스 루이 비제 르 브룬'];
// 마사치오 ~ 대 치테르 브뢰겔 (르네상스), 브론치노 ~ 파르미지아니노 (매너리즘), 카라바조 ~ 귀도 레니 (바로크), 장바티스트시메옹 샤르댕 ~ 엘리자베스 루이 비제 르 브룬 (로코코)

var era = ['원시', '고대', '중세', '근세', '근대', '현대'];
var style = ['르네상스', '매너리즘', '바로크', '로코코', '낭만주의', '모더니즘'];  // 로코코 추가
var year = ['1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];

var data = {"artist":artist, "era":era, "style":style, "year":year};

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

app.get("/show_data", (req, res) => {
  res.render("show_data", { data: data })
});

app.get("/exhibit", (req, res) => {
  res.render("exhibit");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/news_page", (req, res) => {
  res.render("news_page");
});

app.listen(port, () => {
  console.log("Server open: ", port);
}); 
