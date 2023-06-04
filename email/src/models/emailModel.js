const nodemailer = require("nodemailer");

exports.sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryansmtp@gmail.com",
      pass: "kazjgbgofuuexjru",
    },
  });

  const mailOptions = {
    from: "Aryan Yadav",
    to: "imaryan08@gmail.com,rampukar.yadav073@gmail.com",
    subject: "Hello from Node.js!",
    text: "This is a test email sent from a Node.js server using Nodemailer and Gmail.",
  };

  await transporter.sendMail(mailOptions);
};
