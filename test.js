let day = new Date(1967, 9, 2);
const mon = encodeURI("(월)");

const exam = `sysDate=2022.10.24(%EC%9B%94)&toDay=20221024&weekDay=1&yyyy=2022&MM=10&dd=${
  day.getDate() + 1
}`;

// const today = `sysDate=${day
//   .toISOString()
//   .substring(0, 10)
//   .replace(/-/g, ".")}${mon}&toDay=${
//   parseInt(day.toISOString().substring(0, 10).replace(/-/g, "")) + 1
// }&weekDay=${day.getUTCDay() + 1}&yyyy=2022&MM=${day.getMonth() + 1}&dd=${
//   day.getDate() + 1
// }`;

// console.log(
//   parseInt(day.toISOString().substring(0, 10).replace(/-/g, "")) + 10
// );

// console.log(newDay.setDate().toISOString().substring(0, 10).replace(/-/g, ""));

var theBigDay = new Date(); // 1962-07-07
theBigDay.setDate(theBigDay.getDate() + 1);
console.log(theBigDay.toISOString().substring(0, 10).replace(/-/g, ""));

// set으로 설정을하고 get으로 불러오면 된다.
