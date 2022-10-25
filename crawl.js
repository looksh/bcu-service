const express = require("express");
const axios = require("axios");
const fs = require("fs");
const date = require("./js/date");
const mealObj = {};

function mealLoop(sosa, bcu, sosa_staff, bcu_staff) {
  let sosaFoodList = [];
  let bcuFoodList = [];
  let sosaStaffFoodList = [];
  let bcuStaffFoodList = [];

  for (i = 0; i < sosa.length; i++) {
    const sosa_menu = JSON.stringify(sosa[i].bcMenuMenu);
    const sosa_menu_price = JSON.stringify(sosa[i].bcMenuPrice);
    sosaFoodList.push({ sosa_menu, sosa_menu_price });
  }

  for (i = 0; i < bcu.length; i++) {
    const bcu_menu = JSON.stringify(bcu[i].bcMenuMenu);
    const bcu_menu_price = JSON.stringify(bcu[i].bcMenuPrice);
    bcuFoodList.push({ bcu_menu, bcu_menu_price });
  }

  for (i = 0; i < sosa_staff.length; i++) {
    const staff_menu = JSON.stringify(sosa_staff[i].bcMenuMenu);
    const staff_menu_price = JSON.stringify(sosa_staff[i].bcMenuPrice);
    sosaStaffFoodList.push({ staff_menu, staff_menu_price });
  }

  for (i = 0; i < bcu_staff.length; i++) {
    const staff_menu = JSON.stringify(bcu_staff[i].bcMenuMenu);
    const staff_menu_price = JSON.stringify(bcu_staff[i].bcMenuPrice);
    bcuStaffFoodList.push({ staff_menu, staff_menu_price });
  }

  mealObj.sosStudent = sosaFoodList;
  mealObj.bcuStudent = bcuFoodList;
  mealObj.sosStaff = sosaStaffFoodList;
  mealObj.bcuStaff = bcuStaffFoodList;
}

function makeMealObj(dayRes) {
  const SOSA = dayRes.data.sosStudent1;
  const BCU = dayRes.data.bcuStudent;
  const SOSA_STAFF = dayRes.data.sosDepartment;
  const BCU_STAFF = dayRes.data.bcuDepartment;
  const day = dayRes.data.foodPortletParamVO.toDay;

  mealObj.today = day;
  mealLoop(SOSA, BCU, SOSA_STAFF, BCU_STAFF);
}

const BCU_HEADER = {
  headers: {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "ko-KR,ko;q=0.6",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Cookie:
      "WMONID=P98Copi0smH; BCU_PT_SESSION=ODViZDYxMmMtOTRjMi00ZjY5LTk0MjgtNWI1ZmY3ZmY5ZWVk",
    Origin: "https://portal.bc.ac.kr",
    Referer: "https://portal.bc.ac.kr/main/indx/index.do",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Sec-GPC": "1",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "X-CSRF-TOKEN": "3ca2b442-21a4-49da-a805-eed41bcceeb3",
    "X-Requested-With": "XMLHttpRequest",
  },
};

async function main() {
  const today = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.today,
    BCU_HEADER
  );

  const tomorrow = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.tomorrow,
    BCU_HEADER
  );

  makeMealObj(today);
  console.log(mealObj);
  makeMealObj(tomorrow);
  console.log(mealObj);

  fs.writeFile("./meal.json", JSON.stringify(mealObj), (err) => {
    if (err) throw err;
    console.log("OK");
  });
}

main();
