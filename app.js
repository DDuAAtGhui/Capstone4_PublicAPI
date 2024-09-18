import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import axios from "axios";

const app = express();
const port = 3000;
const jokeAPI = "https://v2.jokeapi.dev";

let result;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(expressEjsLayouts);

app.set("view engine", "ejs");
app.set("layout", "layout");

app.get("/", (req, res) => {
  res.render("index", { result: result });
});

app.get("/getJoke", async (req, res) => {
  result = await getJoke();
  res.render("index", { result: result });
});

app.listen(port, () => {
  console.log(`포트번호 ${port}에서 서버 가동중`);
});

async function getJoke(category = "Any", lang = "en") {
  try {
    const result = await axios.get(`${jokeAPI}/joke/${category}`);
    console.log(result.data);

    return result.data;
  } catch (error) {
    console.log(error);
  }
}
