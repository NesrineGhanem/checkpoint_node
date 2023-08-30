const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "23che.di@gmail.com",
    pass: "vjxnvdzivhjqofqx",
  },
});

var mailOptions = {
  from: "23che.di@gmail.com",
  to: "23che.di@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + data.response);
  }
});