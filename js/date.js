const day = new Date();
const newDay = new Date();
const KMTday = new Date(day.setHours(day.getHours() + 9));

function dateCalc(day, param) {
  if (day == KMTday) {
    KMTday.setDate(KMTday.getDate() + param);
    let result = KMTday.toISOString().substring(0, 10).replace(/-/g, "");
    return result;
  } else if (day == newDay) {
    day.setDate(day.getDate() + param);
    let result = day.toLocaleDateString("ko-KR").replaceAll(".", "");
    return result;
  } else {
    console.log("error");
  }
}

const onel = `${dateCalc(newDay, 0)}`;
const neil = `${dateCalc(newDay, 1)}`;

const TODAY = `toDay=${dateCalc(KMTday, 0)}`;
const TOMORROW = `&toDay=${dateCalc(KMTday, 1)}`;

module.exports = {
  day,
  onel,
  neil,
  today: TODAY,
  tomorrow: TOMORROW,
};

console.log(onel);
console.log(neil);
console.log(TODAY);
console.log(TOMORROW);
