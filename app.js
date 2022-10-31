const express = require("express");
const fs = require("fs");
const process = require("./process");
const date = require("./js/date");

const app = express();
const mealRouter = express.Router();
const noticeRouter = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/meal", mealRouter);
app.use("/notice", noticeRouter);

mealRouter.post("/today-sosa", (req, res) => {
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

mealRouter.post("/today-bcu", (req, res) => {
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

mealRouter.post("/tomorrow-sosa", (req, res) => {
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

mealRouter.post("/tomorrow-bcu", (req, res) => {
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

noticeRouter.post("/", (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          carousel: {
            type: "listCard",
            items: [
              {
                header: {
                  title: "학사공지",
                },
                items: [
                  {
                    title: "2022학년도 2학기 중간 강의평가 실시 안내",
                    description: "2022. 10. 04",
                  },
                  {
                    title: "제11호 태풍 힌남노 영향에 따른 수업 운영 안내 ",
                    description: "2022. 09. 05",
                  },
                  {
                    title: "에그 포테이토",
                    description: "5,300원",
                  },
                  {
                    title: "갈릭 베이컨 토마토",
                    description: "5,800원",
                  },
                ],
              },
              {
                header: {
                  title: "장학공지",
                },
                items: [
                  {
                    title: "아메리카노",
                    description: "1,800원",
                  },
                  {
                    title: "카페라떼",
                    description: "2,000원",
                  },
                  {
                    title: "카페모카",
                    description: "2,500원",
                  },
                  {
                    title: "소이라떼",
                    description: "2,200원",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  };
  res.status(200).send(responseBody);
});

app.listen(3000, () => console.log("node on 3000"));
