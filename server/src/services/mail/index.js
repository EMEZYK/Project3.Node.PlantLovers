import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

  const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_USER_PASSWORD
      }
    });

    async function run() {
      let mailOptions = await transporter.sendMail({
        from: 'test@example',
        to: "foo@example.com",
        subject: "Hello World",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
      });
      console.log(mailOptions)
    }

    run().catch(err => console.log(err))
