const day = new Date();
const KMTday = new Date(day.setHours(day.getHours() + 9));

function dateCalc(param) {
  KMTday.setDate(KMTday.getDate() + param);
  let result = KMTday.toISOString().substring(0, 10).replace(/-/g, "");
  return result;
}

const TODAY = `toDay=${dateCalc(0)}`;
const TOMORROW = `&toDay=${dateCalc(1)}`;

module.exports = {
  day,
  today: TODAY,
  tomorrow: TOMORROW,
};
