const day = new Date();

function dateCalc(param) {
  day.setDate(day.getDate() + param);
  let result = day.toISOString().substring(0, 10).replace(/-/g, "");
  return result;
}

const TODAY = `toDay=${dateCalc(0)}`;
const TOMORROW = `&toDay=${dateCalc(1)}`;

module.exports = {
  day,
  today: TODAY,
  tomorrow: TOMORROW,
};

/*
이젠 필요 없을듯
const monEn = encodeURI("(월)");
const tueEn = encodeURI("(화)");
const wedEn = encodeURI("(수)");
const thuEn = encodeURI("(목)");
const friEn = encodeURI("(금)");
*/
