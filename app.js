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
"매너리즘":["미켈란젤로-비너스와_큐피드", "파르미자니노-목이_긴_성모", "엘_그레코-라오콘", "엘_그레코-오르가스_백작의_매장", "파올로_베로네세-가나의_혼인_잔치"], 
"바로크":["디에고_벨라스케스-시녀들", "잔_로렌초_베르니니-성_테레사의_법열", "렘브란트-야경"], 
"로코코":["장오노레_프라고나르-그네", "장오노레_프라고나르-빗장"]
}

var era_4 = {
"사실주의":["귀스타브_쿠르베-돌깨는_사람", "빈센트_반_고흐-감자_먹는_사람들", "오귀스트_로댕-생각하는_사람", "빈센트_반_고흐-담배_피는_해골"], 
"인상주의":["클로드_모네-인상,_해돋이", "클로드_모네-파라솔을_든_여인", "에두아르_마네-올랭피아"], 
"야수파":["앙리_마티스-초록색_띠", "앙드레_드랭-The_Turning_Road,_L_'Estaque", "앙리_마티스-춤"], 
"다다이즘":["오토_딕스-The_Skat_Players"], 
"초현실주의":["살바도르_달리-기억의_지속", "르네_마그리트-철학자의_램프"]
}

var era_5 = {
"포스트 모더니즘":["루보_크리스테크-In_the_Captivity_of_the_Wordly_Cathedral"],
"추상표현주의":["잭슨_폴록-No._1", "잭슨_폴록-No._1A"], 
"팝아트":["앤디_워홀-마린린-먼로","로이_리히텐슈타인-차안에서"], 
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
