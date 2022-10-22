const express = require("express");
const axios = require("axios");
const mealObj = [];
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
  const TodayResponse = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    "sysDate=2022.10.24(%EC%9B%94)&toDay=20221024&weekDay=1&yyyy=2022&MM=10&dd=24",
    BCU_HEADER
  );

  const TomorrowResponse = await axios.post(
    "https://portal.bc.ac.kr/pltl/food/findFoodData.json",
    "sysDate=2022.10.25(%ED%99%94)&toDay=20221025&weekDay=2&yyyy=2022&MM=10&dd=25",
    BCU_HEADER
  );

  const mealList = JSON.stringify(TodayResponse.data.sosStudent1[0].bcMenuMenu);
  const mealDay = JSON.stringify(TodayResponse.data.foodPortletParamVO.toDay);

  const meal = JSON.stringify(TomorrowResponse.data.sosStudent1[0].bcMenuMenu);
  const Day = JSON.stringify(TomorrowResponse.data.foodPortletParamVO.toDay);
  console.log(mealDay);
  console.log(mealList);
  console.log(meal);
  console.log(Day);
}

main();
