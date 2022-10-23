const day = new Date();

function dateCalc(param) {
  day.setDate(day.getDate() + param);
  let result = day.toISOString().substring(0, 10).replace(/-/g, "");
  return result;
}

const monEn = encodeURI("(월)");
const tueEn = encodeURI("(화)");
const wedEn = encodeURI("(수)");
// const thuEn = encodeURI("(목)");
// const friEn = encodeURI("(금)");

const MONDAY = `sysDate=${monEn}&toDay=${dateCalc(1)}`;
const TUESDAY = `sysDate=${tueEn}&toDay=${dateCalc(1)}`;
const WEDNESDAY = `sysDate=${wedEn}&toDay=${dateCalc(1)}`;
// const THURSDAY = `sysDate=${thuEn}&toDay=${dateCalc(1)}`;
// const FRIDAY = `sysDate=${friEn}&toDay=${dateCalc(1)}`;

module.exports = {
  day,
  mon: MONDAY,
  tue: TUESDAY,
  wed: WEDNESDAY,
  //   thu: THURSDAY,
  //   fri: FRIDAY,
};
