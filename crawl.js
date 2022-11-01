const express = require("express");
const axios = require("axios");
const fs = require("fs");
const date = require("./js/date");
const mealObj = {};

// 객체를 생성하고 배열에 넣는 함수
function helpMe(info, arr) {
  for (i = 0; i < info.length; i++) {
    const menu = info[i].bcMenuMenu;
    const price = info[i].bcMenuPrice;
    arr.push({ menu, price });
  }
}

// 데이터를 가공하는 함수
function mealLoop(sosa, bcu, sosa_staff, bcu_staff) {
  let sosaFoodList = [];
  let bcuFoodList = [];
  let sosaStaffFoodList = [];
  let bcuStaffFoodList = [];

  helpMe(sosa, sosaFoodList);
  helpMe(bcu, bcuFoodList);
  helpMe(sosa_staff, sosaStaffFoodList);
  helpMe(bcu_staff, bcuStaffFoodList);

  // mealObj 의 key 와 value 를 설정하는 코드
  mealObj.sosStudent = sosaFoodList;
  mealObj.bcuStudent = bcuFoodList;
  mealObj.sosStaff = sosaStaffFoodList;
  mealObj.bcuStaff = bcuStaffFoodList;
}

// axios 에서 파싱된 주소를 받아서 목적에 맞는 변수로 나눠줌
function makeMealObj(dayRes) {
  const SOSA = dayRes.data.sosStudent1;
  const BCU = dayRes.data.bcuStudent;
  const SOSA_STAFF = dayRes.data.sosDepartment;
  const BCU_STAFF = dayRes.data.bcuDepartment;
  const day = dayRes.data.foodPortletParamVO.toDay;

  mealObj.today = day;
  mealLoop(SOSA, BCU, SOSA_STAFF, BCU_STAFF);
}

function createJson(name) {
  fs.writeFile(`./json/${name}.json`, JSON.stringify(mealObj), (err) => {
    if (err) throw err;
    console.log("OK");
  });
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
  makeMealObj(today);
  createJson("todayMeal");

  const tomorrow = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.tomorrow,
    BCU_HEADER
  );
  makeMealObj(tomorrow);
  createJson("tomorrowMeal");
}

main();
