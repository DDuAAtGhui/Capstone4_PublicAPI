import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(expressEjsLayouts);

app.set("view engine", "ejs");
app.set("layout", "layout");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`포트번호 ${port}에서 서버 가동중`);
});
