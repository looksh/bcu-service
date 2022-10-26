const fs = require("fs");
let mealObj;

fs.readFile("./todayMeal.json", "utf-8", (err, data) => {
  if (err) throw err;
  mealObj = JSON.parse(data);
  console.log(mealObj.today);
});
