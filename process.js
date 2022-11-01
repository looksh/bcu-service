const fs = require("fs");

let meal;
// 오늘에 해당하는 데이터
let sosaStudent = [];
let sosaStaff = [];
let bcuStudent = [];
let bcuStaff = [];
// 내일에 해당하는 데이터
let sosaStudentTomo = [];
let sosaStaffTomo = [];
let bcuStudentTomo = [];
let bcuStaffTomo = [];

// 가공된 데이터 읽어오는 함수
function readJson(mealJson) {
  fs.readFile(`./json/${mealJson}.json`, "utf-8", (err, data) => {
    if (err) throw err;
    meal = JSON.parse(data);

    const SOSA_STUDENT = meal.sosStudent;
    const SOSA_STAFF = meal.sosStaff;
    const BCU_STUDENT = meal.bcuStudent;
    const BCU_STAFF = meal.bcuStaff;

    // 각각의 배열에 데이터를 저장.
    if (mealJson == "todayMeal") {
      chatbotRes(SOSA_STUDENT, sosaStudent);
      chatbotRes(SOSA_STAFF, sosaStaff);
      chatbotRes(BCU_STUDENT, bcuStudent);
      chatbotRes(BCU_STAFF, bcuStaff);
    }

    if (mealJson == "tomorrowMeal") {
      chatbotRes(SOSA_STUDENT, sosaStudentTomo);
      chatbotRes(SOSA_STAFF, sosaStaffTomo);
      chatbotRes(BCU_STUDENT, bcuStudentTomo);
      chatbotRes(BCU_STAFF, bcuStaffTomo);
    }
  });
}

readJson("todayMeal");
readJson("tomorrowMeal");

// 만약에 오늘 식단이 없다면?
function chatbotRes(path, arr) {
  if (path.length == 0) {
    arr.push("식단 정보가 없어요!");
  } else {
    for (i = 0; i < path.length; i++) {
      arr.push(path[i].menu);
      arr.push(path[i].price);
      arr.push("\n");
    }
  }
}

module.exports = {
  todayStu: sosaStudent,
  todayStf: sosaStaff,
  todayBtu: bcuStudent,
  todayBtf: bcuStaff,
  tomoStu: sosaStudentTomo,
  tomoStf: sosaStaffTomo,
  tomoBtu: bcuStudentTomo,
  tomoBtf: bcuStaffTomo,
};
