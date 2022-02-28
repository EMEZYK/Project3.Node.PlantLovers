import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const sendEmail = () =>{

    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_USER_PASSWORD
        }
    });
  
    let mailOptions = {
      from: '"Plant Lovers" <plantlovers@plantme.com>',
      to: "daisy@example.com",
      text: "Can you adopt me?",
      subject: "Hello Plant Lover 🌼",
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent:', info.envelope);   
  
    });
  }
  
  export default sendEmail;