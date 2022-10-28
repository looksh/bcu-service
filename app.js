const express = require("express");
const fs = require("fs");
const process = require("./process");
const date = require("./js/date");
const app = express();
const apiRouter = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRouter);

apiRouter.post("/todaySosa", (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      today: `${date.onel}`,
      student: `${process.sosaStudent}`,
      staff: `${process.sosaStaff}`,
    },
  };
  res.status(200).send(responseBody);
});

apiRouter.post("/todayBcu", (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      today: `${date.onel}`,
      student: `${process.bcuStudent}`,
      staff: `${process.bcuStaff}`,
    },
  };
  res.status(200).send(responseBody);
});

app.listen(3000, () => console.log("node on 3000"));
