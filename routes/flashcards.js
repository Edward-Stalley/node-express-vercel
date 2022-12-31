const express = require("express");
const router = express.Router();

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

router.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
  const yearId = req.params.yearId;
  const weekId = req.params.weekId;
  const classId = req.params.classId;

  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.set("Access-Control-Allow-Origin", "*");
    // res.send({ msg: "This has CORS enabled 🎈" });
    res.json(data);
  });
});

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "This is the flashcards!",
  });
});

router.get("/cards", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "This is the flashcards!",
  });
});

module.exports = router;
