import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // WAJIB false untuk port 587
  auth: {
    user: process.env.SMTP_USER, // 98b629001@smtp-brevo.com
    pass: process.env.SMTP_PASS, // xsmtpsib-xxxx
  },
  connectionTimeout: 10000, // biar gak loading abadi
  greetingTimeout: 10000,
});

export default transporter;
