var express = require("express");
var router = express.Router();
const { sendMail } = require("../controllers/sendEmail");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/sendMail", sendMail);
module.exports = router;
