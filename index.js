const express = require("express");
const axios = require("axios");
const date = require("./date");

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
  // HTML 로드
  const monResponse = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.mon,
    BCU_HEADER
  );

  const tueResponse = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.tue,
    BCU_HEADER
  );

  const wedResponse = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    date.wed,
    BCU_HEADER
  );

  // const thuResponse = await axios.post(
  //   "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
  //   date.thu,
  //   BCU_HEADER
  // );

  // const friResponse = await axios.post(
  //   "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
  //   date.fri,
  //   BCU_HEADER
  // );

  const mealList = JSON.stringify(monResponse.data.sosStudent1[0].bcMenuMenu);
  const mealDay = JSON.stringify(monResponse.data.foodPortletParamVO.toDay);

  const mealList2 = JSON.stringify(wedResponse.data.sosStudent1[0].bcMenuMenu);
  const mealDay2 = JSON.stringify(wedResponse.data.foodPortletParamVO.toDay);

  console.log(mealDay);
  console.log(mealList);
  console.log(mealDay2);
  console.log(mealList2);
}

main();
