const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;

// 전역으로 사용할 변수
var artist = {
  "마사치오": {},
  "보티첼리": {},
  "레오나르도 다 빈치": {},
  "미켈란젤로": {},
  "조르조네": {},
  "티티안": {},
  "조르지오 바사리": {},
  "라파엘로": {},
  "안토니오 코레지오": {},
  "한스 홀바인": {},
  "알브레히트 뒤러": {},
  "마티아스 그뤼네발트": {},
  "히에로니무스 보슈": {},
  "안니발 카라치": {},
  "라비니아 폰타나": {},
  "대 피테르 브뢰겔": {},
  "브론치노": {},
  "폰토르모": {},
  "엘 그레코": {},
  "파르미지아니노": {},
  "카라바조": {},
  "디에고 벨라스케스": {},
  "피터르 파우얼 루번스": {},
  "렘브란트": {},
  "아르테미시아 젠틸레스키": {},
  "귀도 레니": {},
  "장바티스트시메옹 샤르댕": {},
  "장앙투안 와토": {},
  "장오노레 프라고나르": {},
  "엘리자베스 루이 비제 르 브룬": {}
};
// 마사치오 ~ 대 치테르 브뢰겔 (르네상스), 브론치노 ~ 파르미지아니노 (매너리즘), 카라바조 ~ 귀도 레니 (바로크), 장바티스트시메옹 샤르댕 ~ 엘리자베스 루이 비제 르 브룬 (로코코)

var year = ["1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000"];
var era = ["고대", "중세", "근세", "근대", "현대"];
var era_1 = [] 
var era_2 = []
var era_3 = ["르네상스", "매너리즘", "바로크", "로코코"]
var era_4 = ["사실주의", "인상주의", "야수파", "다다이즘", "초현실주의"]
var era_5 = ["포스트 모더니즘", "추상표현주의", "미니멀리즘", "팝아트", "극사실주의", "행위예술"]

var artbox_data = [era, [era_1, era_2, era_3, era_4, era_5]];

app.get("/", (req, res) => {
  res.render("root_page");
});

const listQnA = [
  {
    btn: "#1 웹사이트를 어떻게 활용하나요?",
    content:
      "art-box 사이트는 미술 및 전시 관련 정보를 제공하고 있습니다. 목차의 링크를 타고 검색을 하여 활용하셔서 필요한 정보를 얻으시기 바랍니다.",
  },
  {
    btn: "#2 미술 정보들을 확인은 어디서 하나요?",
    content:
      "상단의 'MUSEUM' 링크를 눌러서 정보를 확인할 수 있습니다. 연혁별, 작가별 등으로 검색하여 확인할 수 있으니 필요한 내용을 더 쉽게 확인할 수 있습니다.",
  },
  {
    btn: "#3 전시 관련 정보는 어디서 확인하나요?",
    content:
      "상단의 'EXHIBITION' 링크를 눌러서 정보를 확인할 수 있습니다. 페이지 내의 카드들에 마우스를 올려서 다가올 전시 정보들을 확인할 수 있습니다.",
  },
  {
    btn: "#4 미술 관련 뉴스들은 어디서 확인하나요?",
    content: "상단의 'NEWS' 링크를 눌러서 정보를 확인할 수 있습니다.",
  },
  {
    btn: "#5 정보에 오류가 있나요?",
    content:
      "왼쪽에 문의사항 버튼을 클릭하여 문의 내용을 입력하여, 문의주시기 바랍니다.",
  },
];

app.get("/inquery", (req, res) => {
  res.render("inquery", { listQnA });
});

app.get("/show_data", (req, res) => {
  res.render("show_data", { artbox_data:artbox_data });
});

app.get("/exhibit", (req, res) => {
  res.render("exhibit");
});

app.get("/exhibition", (req, res) => {
  res.render("exhibition");
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
