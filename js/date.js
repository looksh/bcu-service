const day = new Date();

function dateCalc(param) {
  day.setDate(day.getDate() + param);
  let result = day.toISOString().substring(0, 10).replace(/-/g, "");
  return result;
}

const monEn = encodeURI("(월)");
const tueEn = encodeURI("(화)");
const wedEn = encodeURI("(수)");
const thuEn = encodeURI("(목)");
const friEn = encodeURI("(금)");

// if (getDate() == 1 ){
//   today = monEn;
// }

const MONDAY = `sysDate=${monEn}&toDay=${dateCalc(0)}`;
const TUESDAY = `sysDate=${tueEn}&toDay=${dateCalc(1)}`;
const WEDNESDAY = `sysDate=${wedEn}&toDay=${dateCalc(1)}`;
// const THURSDAY = `sysDate=${thuEn}&toDay=${dateCalc(1)}`;
// const FRIDAY = `sysDate=${friEn}&toDay=${dateCalc(1)}`;

// function todayCalc() {
//   if (day.getDay() === 1) {
//     const MONDAY = `sysDate=${monEn}&toDay=${dateCalc(0)}`;
//     return MONDAY;
//   } else if (day.getDay() === 2) {
//     const TUESDAY = `sysDate=${tueEn}&toDay=${dateCalc(1)}`;
//     return TUESDAY;
//   } else if (day.getDay() === 3) {
//     const WEDNESDAY = `sysDate=${wedEn}&toDay=${dateCalc(1)}`;
//     return WEDNESDAY;
//   } else if (day.getDay() === 4) {
//     const THURSDAY = `sysDate=${thuEn}&toDay=${dateCalc(1)}`;
//     return THURSDAY;
//   } else if (day.getDay() === 5) {
//     const FRIDAY = `sysDate=${friEn}&toDay=${dateCalc(1)}`;
//     return FRIDAY;
//   }
// }

module.exports = {
  day,
  today: MONDAY,
  tue: TUESDAY,
  wed: WEDNESDAY,
  //   thu: THURSDAY,
  //   fri: FRIDAY,
};

/*
만약 오늘이 수요일 이라면 (Today) 기준
test = wedEn; 
sysDate=${test}&toDay=${오늘날짜};

만약 사용자가 내일의 정보를 원한다면
test = wedEn; 
sysDate=${test}&toDay=${오늘날짜+1};
*/
