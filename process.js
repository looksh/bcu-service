const fs = require("fs");
let meal;
let sosaStudent = [];
let sosaStaff = [];
let bcuStudent = [];
let bcuStaff = [];

fs.readFile("./todayMeal.json", "utf-8", (err, data) => {
  if (err) throw err;
  meal = JSON.parse(data);
  fuck(meal);
});

function fuck(meal) {
  const SOSA_STUDENT = meal.sosStudent;
  const SOSA_STAFF = meal.sosStaff;
  const BCU_STUDENT = meal.bcuStudent;
  const BCU_STAFF = meal.bcuStaff;

  for (i = 0; i < SOSA_STUDENT.length; i++) {
    sosaStudent.push(SOSA_STUDENT[i].sosa_menu);
    sosaStudent.push(SOSA_STUDENT[i].sosa_menu_price);
    sosaStudent.push("\n");
  }

  for (i = 0; i < SOSA_STAFF.length; i++) {
    sosaStaff.push(SOSA_STAFF[i].staff_menu);
    sosaStaff.push(SOSA_STAFF[i].staff_menu_price);
    sosaStaff.push("\n");
  }

  for (i = 0; i < BCU_STUDENT.length; i++) {
    bcuStudent.push(BCU_STUDENT[i].bcu_menu);
    bcuStudent.push(BCU_STUDENT[i].bcu_menu_price);
    bcuStudent.push("\n");
  }

  for (i = 0; i < BCU_STAFF.length; i++) {
    bcuStaff.push(BCU_STAFF[i].staff_menu);
    bcuStaff.push(BCU_STAFF[i].staff_menu_price);
    bcuStaff.push("\n");
  }
}

module.exports = {
  sosaStudent,
  sosaStaff,
  bcuStudent,
  bcuStaff,
};
