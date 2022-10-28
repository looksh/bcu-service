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
      student: `${process.todayStu}`,
      staff: `${process.todayStf}`,
    },
  };
  res.status(200).send(responseBody);
});

apiRouter.post("/todayBcu", (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      today: `${date.onel}`,
      student: `${process.todayBtu}`,
      staff: `${process.todayBtf}`,
    },
  };
  res.status(200).send(responseBody);
});

apiRouter.post("/tomorrowSosa", (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      today: `${date.neil}`,
      student: `${process.tomoStu}`,
      staff: `${process.tomoStf}`,
    },
  };
  res.status(200).send(responseBody);
});

apiRouter.post("/tomorrowBcu", (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      today: `${date.neil}`,
      student: `${process.tomoBtu}`,
      staff: `${process.tomoBtf}`,
    },
  };
  res.status(200).send(responseBody);
});

app.listen(3000, () => console.log("node on 3000"));
