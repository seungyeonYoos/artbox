const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수


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
