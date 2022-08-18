const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("root_page");
});

app.get("/artist", (req, res) => {
  res.render("category/artist");
});

app.get("/era", (req, res) => {
  res.render("");
});

app.get("/sytle", (req, res) => {
  res.render("");
});

app.get("/year", (req, res) => {
  res.render("");
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

app.listen(port, () => {
  console.log("Server open: ", port);
});
