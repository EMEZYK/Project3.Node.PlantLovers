import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_USER_PASSWORD,
  },
});

const sendEmail = (data) => {
  const mailOptions = {
    from: '"Plant Lovers" <plantlovers@plantme.com>',
    to: data.to,
    text: data.text,
    subject: `${data.subject} 🌼`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent:", info.envelope);
  });
};

export default sendEmail;
