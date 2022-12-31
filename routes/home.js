const express = require("express");
const router = express.Router();

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

router.get("/", async (req, res, next) => {
  const q = `SELECT * FROM listening_kiso`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    // res.set("Access-Control-Allow-Origin", "*");
    // res.send({ msg: "This has CORS enabled 🎈" });
    return res.status(200).json(data);
  });

  // return res.status(200).json({
  //   title: "Express Testing",
  //   message: "The app is working properly I hope I can add cards to it!",
  // });
});

module.exports = router;
