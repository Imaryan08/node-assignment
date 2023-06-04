const emailModel = require("../models/emailModel");

exports.sendEmail = async (req, res) => {
  try {
    await emailModel.sendEmail();
    res.send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.send("Error sending email");
  }
};
