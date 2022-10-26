const express = require("express");
const app = express();
const apiRouter = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRouter);

apiRouter.post("/today", (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "오늘의 식단 데이터를 출력할거야",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

app.listen(3000, () => console.log("node on 3000"));
