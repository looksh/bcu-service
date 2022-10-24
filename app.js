const express = require("express");
const fs = require("fs");
const app = express();

let meal;

fs.readFile("./meal.json", "utf8", (err, data) => {
  if (err) throw err;
  meal = JSON.parse(data);
});

app.use(express.urlencoded({ extended: false }));

app.post("/message", (req, res) => {
  const day = new Date();
  const today = day.getDay();
  const yoil = day.toString().slice(0, 3).toUpperCase();

  const question = req.body.userRequest.utterance;
  const goMain = "처음으로";
  const goBack = "뒤로가기";
  const selectDay = "요일지정";
  let data;
  //...
});

const day2 = new Date();

console.log(day2.toString().slice(0, 3).toUpperCase());
