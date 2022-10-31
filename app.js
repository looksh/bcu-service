const express = require("express");
const fs = require("fs");
const process = require("./process");
const date = require("./js/date");
const notice = require("./crawlNotice");

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
                  title: "일반공지",
                },
                items: [
                  {
                    title: `${notice.ilbanPost[0].title}`,
                    description: `${notice.ilbanPost[0].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice01.do${notice.ilbanPost[0].url}`,
                    },
                  },
                  {
                    title: `${notice.ilbanPost[1].title}`,
                    description: `${notice.ilbanPost[1].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice01.do${notice.ilbanPost[1].url}`,
                    },
                  },
                  {
                    title: `${notice.ilbanPost[2].title}`,
                    description: `${notice.ilbanPost[2].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice01.do${notice.ilbanPost[2].url}`,
                    },
                  },
                  {
                    title: `${notice.ilbanPost[3].title}`,
                    description: `${notice.ilbanPost[3].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice01.do${notice.ilbanPost[3].url}`,
                    },
                  },
                  {
                    title: `${notice.ilbanPost[4].title}`,
                    description: `${notice.ilbanPost[4].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice01.do${notice.ilbanPost[4].url}`,
                    },
                  },
                ],
              },
              {
                header: {
                  title: "장학공지",
                },
                items: [
                  {
                    title: `${notice.janghakPost[0].title}`,
                    description: `${notice.janghakPost[0].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice03.do${notice.janghakPost[0].url}`,
                    },
                  },
                  {
                    title: `${notice.janghakPost[1].title}`,
                    description: `${notice.janghakPost[1].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice03.do${notice.janghakPost[1].url}`,
                    },
                  },
                  {
                    title: `${notice.janghakPost[2].title}`,
                    description: `${notice.janghakPost[2].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice03.do${notice.janghakPost[2].url}`,
                    },
                  },
                  {
                    title: `${notice.janghakPost[3].title}`,
                    description: `${notice.janghakPost[3].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice03.do${notice.janghakPost[3].url}`,
                    },
                  },
                  {
                    title: `${notice.janghakPost[4].title}`,
                    description: `${notice.janghakPost[4].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice03.do${notice.janghakPost[4].url}`,
                    },
                  },
                ],
              },
              {
                header: {
                  title: "학사공지",
                },
                items: [
                  {
                    title: `${notice.haksaPost[0].title}`,
                    description: `${notice.haksaPost[0].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice02.do${notice.haksaPost[0].url}`,
                    },
                  },
                  {
                    title: `${notice.haksaPost[1].title}`,
                    description: `${notice.haksaPost[1].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice02.do${notice.haksaPost[1].url}`,
                    },
                  },
                  {
                    title: `${notice.haksaPost[2].title}`,
                    description: `${notice.haksaPost[2].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice02.do${notice.haksaPost[2].url}`,
                    },
                  },
                  {
                    title: `${notice.haksaPost[3].title}`,
                    description: `${notice.haksaPost[3].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice02.do${notice.haksaPost[3].url}`,
                    },
                  },
                  {
                    title: `${notice.haksaPost[4].title}`,
                    description: `${notice.haksaPost[4].date}`,
                    link: {
                      web: `https://www.bc.ac.kr/bcu/pr/notice02.do${notice.haksaPost[4].url}`,
                    },
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
