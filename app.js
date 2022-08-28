const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수
var art_desc = {"Unknown-봄": "BC 1세기경<br>폼페이 벽화",
"Theodore_Apsevdis-Jesus": "",
"노트르담_대성당": "",
"알브레히트_뒤러 - 어린 토끼": "어린 토끼, 또는 산토끼는 독일의 화가 알브레히트 뒤러의 1502년 수채화·구아슈 작품이다. 이듬해 그린 《큰 잔디밭》과 함께 뒤러의 관찰력을 엿볼 수 있는 걸작으로 평가받고 있다.",
"조토_디_본도네 - 동방박사의 경배": "Botticelli는 1475년경 Santa Maria Novella에 있는 Gaspare di Zanobi del Lama의 예배당 제단을 위해 이 작품을 그렸습니다.",
"레오나르도_다빈치 - 모나리자": "이 그림은 뭐라고 딱 잘라 말할 수 없는 미묘한 미소가 특징인데, 입을 보면 웃고 있는데 눈만 보면 알 수 없다.",
"레오나드로_다빈치 - 흰 담비를 안은 귀부인" :"에르마인을 안은 숙녀라고도 불린다. 르네상스 시대 초상화의 걸작으로, 1489년부터 1490년까지 약 1년에 걸쳐 그려졌다고 한다. 현재 폴란드 크라쿠프의 차르토리스키 미술관에 소장중이다."
}

var year = ["1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000"];
var era = ["고대", "중세", "근세", "근대", "현대"];

var era_1 = {"로마미술":["Unknown-봄"]};

var era_2 = {
"비잔틴미술": ["Theodore_Apsevdis-Jesus"],
"고딕": ["노트르담_대성당"]
}

var era_3 = {
"르네상스": ["알브레히트_뒤러-어린토끼", "조토_디_본도네-동방박사의_경배", "레오나르도_다빈치-모나리자", "레오나드로_다빈치-흰_담비를_안은_귀부인"], 
"매너리즘":[], 
"바로크":[], 
"로코코":[]
}

var era_4 = {
"사실주의":[], 
"인상주의":[], 
"야수파":[], 
"다다이즘":[], 
"초현실주의":[]
}

var era_5 = {
"포스트 모더니즘":[],
"추상표현주의":[], 
"미니멀리즘":[], 
"팝아트":[], 
"극사실주의":[], 
"행위예술":[]
}

var artbox_data = [era, [era_1, era_2, era_3, era_4, era_5]];

// 사진 폴더 리스트 디렉토리
const testFolder = './static/img/artbox';
const fs = require('fs');
var artbox_img;

artbox_img = fs.readdirSync(testFolder, (err, files) => {
  return files;
});
/////////////////////////////////

app.get("/", (req, res) => {
  res.render("root_page");
});

app.get("/inquery", (req, res) => {
  res.render("inquery");
});

app.get("/show_data", (req, res) => {
  res.render("show_data", { artbox_data:artbox_data, artbox_img:artbox_img });
});

app.post("/show_data_desc", (req, res) => {
  res.render("show_data", { art_desc: art_desc });
});

app.get("/exhibit", (req, res) => {
  res.render("exhibit");
});

app.get("/footer", (req, res) => {
  res.render("footer");
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

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(port, () => {
  console.log("Server open: ", port);
});
