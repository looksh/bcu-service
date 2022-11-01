const cheerio = require("cheerio");
const axios = require("axios");

let ilbanPost = [];
let haksaPost = [];
let janghakPost = [];

function makeNoticeArr(info, arr) {
  const $ = cheerio.load(info.data);
  const $post = $("tbody").children("tr");

  $post.each((index, node) => {
    const noticeBox = $(node)
      .find(".b-td-left > .b-title-box > .b-notice-box > span")
      .text();

    const title = $(node)
      .find(".b-td-left > .b-title-box > a[title]")
      .text()
      .replace(/[\n\t]/g, "");
    const date = $(node)
      .find(".b-td-left > .b-title-box > .b-m-con > .b-date")
      .text()
      .replace(/[\n\t]/g, "");
    const url = $(node)
      .find(".b-td-left > .b-title-box > a")
      .attr("href")
      .replace(/[\n\t]/g, "");
    arr.push({ title, date, url });

    if (noticeBox == "공지") {
      arr.shift();
    }
  });
  arr.length = 5;
  console.log("ok");
}

async function notice() {
  const getGeneral = await axios.get("https://www.bc.ac.kr/bcu/pr/notice01.do");
  makeNoticeArr(getGeneral, ilbanPost);

  const getScholar = await axios.get("https://www.bc.ac.kr/bcu/pr/notice02.do");
  makeNoticeArr(getScholar, haksaPost);

  const getAcademic = await axios.get(
    "https://www.bc.ac.kr/bcu/pr/notice03.do"
  );
  makeNoticeArr(getAcademic, janghakPost);
}

notice();

module.exports = {
  ilbanPost,
  haksaPost,
  janghakPost,
};
