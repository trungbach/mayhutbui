const { sendMail } = require("../helper");

module.exports.sendMail = async (req, res) => {
  const data = req.body; // data nhận từ client
  try {
    await sendMail({ ...data });
    res.send("Send mail successfully !");
  } catch (error) {
    console.log("🚀 ~ file: sendEmail.js:9 ~ module.exports.sendMail= ~ error:", error)
    res.status(500).send("Send mail fail !");
  }
};
