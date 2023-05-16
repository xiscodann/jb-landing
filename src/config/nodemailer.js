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
    user: 'jbarrero@joebarbusinesssolutions.com',
    pass: '3Purital@93$',
  },
});

export const mailOptions = {
  from: '"José Barrero" <jbarrero@joebarbusinesssolutions.com>',
};
