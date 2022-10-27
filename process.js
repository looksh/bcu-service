// 챗봇에 맞는 형식으로 2차 가공
const fs = require("fs");

let meal;
let sosaStudent = [];
let sosaStaff = [];
let bcuStudent = [];
let bcuStaff = [];

fs.readFile("./json/todayMeal.json", "utf-8", (err, data) => {
  if (err) throw err;
  meal = JSON.parse(data);

  const SOSA_STUDENT = meal.sosStudent;
  const SOSA_STAFF = meal.sosStaff;
  const BCU_STUDENT = meal.bcuStudent;
  const BCU_STAFF = meal.bcuStaff;

  chatbotRes(SOSA_STUDENT, sosaStudent);
  chatbotRes(SOSA_STAFF, sosaStaff);
  chatbotRes(BCU_STUDENT, bcuStudent);
  chatbotRes(BCU_STAFF, bcuStaff);

  console.log(bcuStudent);
});

function chatbotRes(path, arr) {
  for (i = 0; i < path.length; i++) {
    arr.push(path[i].menu);
    arr.push(path[i].price);
    arr.push("\n");
  }
}

module.exports = {
  sosaStudent,
  sosaStaff,
  bcuStudent,
  bcuStaff,
};
