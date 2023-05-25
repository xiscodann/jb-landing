import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  secure: true,
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3',
  },
  requireTLS: true,
  port: 465,
  debug: true,
  auth: {
    user: process.env.EMAIL_TRANSMITTER,
    pass: process.env.PASS_TRANSMITTER,
  },
});

export const mailOptions = {
  from: `"Joe Bar Business Solutions" <${process.env.EMAIL_TRANSMITTER}>`,
};
