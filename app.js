const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수

var year = [
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900",
  "2000",
];
var era = ["고대", "중세", "근세", "근대", "현대"];

var era_1 = { 로마미술: ["Unknown-봄"] };

var era_2 = {
  비잔틴미술: ["Theodore_Apsevdis-Jesus"],
  고딕: ["Notre_Dame_Cathedral"],
};
var era_3 = {
  르네상스: [
    "Albrecht_Durer-Young_Hare",
    "Giotto_D_Bondone-The_Adoration_of_the_Magi",
    "Leonardo_da_Vinci-Mona_Lisa",
    "Leonardo_da_Vinci-The_Lady_with_the_Ermine",
  ],
  매너리즘: [
    "Michelangelo-Venus_and_Cupid",
    "Girolamo_Francesco_Maria_Mazzola-Madonna_with_the_Long_Neck",
    "El_Greco-Laocoon",
    "El_Greco-The_Burial_of_the_Count_of_Orgaz",
    "Paolo_Veronese-The_Wedding_at_Cana",
  ],
  바로크: [
    "Diego_Velazquez-Las_Meninas_The_Maids_of_Honour",
    "Giovanni_Lorenzo_Bernini-Ecstasy_of_Saint_Teresa",
    "rembrandt-night_watch",
  ],
  로코코: ["jean-honore_fragonard-The_swing", "jean-honore_fragonard-The_Bolt"],
};

var era_4 = {
  사실주의: [
    "Gustave_Courbet-The_Stone_Breakers",
    "Vincent_van_Gogh-The_Potato_Eaters",
    "Auguste_Rodin-Thinking_person",
    "Vincent_van_Gogh-Skull_of_a_Skeleton_with_Burning_Cigarette",
  ],
  인상주의: [
    "Claude_Monet-Impression_Sunrise",
    "Claude_Monet-Woman_with_a_Parasol",
    "Edouard_Manet-Olympia",
  ],
  야수파: [
    "Henri_Matisse-Green_Stripe",
    "Andre_Derain-The_The_Turning_Road_L_Estaque",
    "Henri_Matisse-The_Dance",
  ],
  다다이즘: ["Otto_Dix-The_Skat_Players"],
  초현실주의: [
    "Salvador_Dali-The_Persistence_of_Memory",
    "Rene_Magritte-The_Philospher's_Lamp",
  ],
};

var era_5 = {
  "포스트 모더니즘": ["Lubo_Kristek-In_the_Captivity_of_the_Wordly_Cathedral"],
  추상표현주의: ["Jackson_Pollock-No_1", "Jackson_Pollock-No_1A"],
  팝아트: ["andy_warhol-marilyn_monroe", "Roy_Lichtenstein-In_the_Car"],
};

var artbox_data = [era, [era_1, era_2, era_3, era_4, era_5]];

// 사진 폴더 리스트 디렉토리
const testFolder = "./static/img/artbox";
const fs = require("fs");
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
  res.render("show_data", { artbox_data: artbox_data, artbox_img: artbox_img });
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
