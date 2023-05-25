import { mailOptions, transporter } from './nodemailer';
const busboy = require('busboy');

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  organization: 'Organization',
  message: 'Message',
};

const generateEmailContent = (data, attachments) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title></title>
        <meta name="description" content="Notifications Email Template" />
        <style type="text/css">
          a:hover {
            text-decoration: none !important;
          }
          :focus {
            outline: none;
            border: 0;
          }
        </style>
      </head>
    
      <body
        marginheight="0"
        topmargin="0"
        marginwidth="0"
        style="margin: 0px; background-color: #f2f3f8"
        bgcolor="#eaeeef"
        leftmargin="0"
      >
        <table
          cellspacing="0"
          border="0"
          cellpadding="0"
          width="100%"
          bgcolor="#f2f3f8"
          style="
            @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
            font-family: 'Open Sans', sans-serif;
          "
        >
          <tr>
            <td>
              <table
                style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
                width="100%"
                border="0"
                align="center"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td style="height: 80px">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align: center">
                    <a href="https://joebarsolutions.com/" title="logo" target="_blank">
                      <img
                        width="200"
                        src="https://joebarsolutions.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1ab3f673.png&w=3840&q=75"
                        title="logo"
                        alt="logo"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td height="20px;">&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    <table
                      width="95%"
                      border="0"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        max-width: 600px;
                        background: #fff;
                        border-radius: 3px;
                        text-align: left;
                        -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      "
                    >
                      <tr>
                        <td style="padding: 40px">
                          <table
                            width="100%"
                            border="0"
                            align="center"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tr>
                              <td>
                                <h1
                                  style="
                                    color: #1e1e2d;
                                    font-weight: 500;
                                    margin: 0;
                                    font-size: 32px;
                                    font-family: 'Rubik', sans-serif;
                                  "
                                >
                                  Apply for a job
                                </h1>
                                <p
                                  style="
                                    font-size: 15px;
                                    color: #455056;
                                    line-height: 24px;
                                    margin: 8px 0 30px;
                                  "
                                >
                                  A candidate wants to apply his CV with Joe Bar Business Solutions
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  align="center"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr
                                    style="
                                      border-bottom: 1px solid #ebebeb;
                                      margin-bottom: 26px;
                                      padding-bottom: 29px;
                                      display: block;
                                    "
                                  >
                                    <td style="vertical-align: top">
                                      <h3
                                        style="
                                          color: #4d4d4d;
                                          font-size: 20px;
                                          font-weight: 400;
                                          line-height: 30px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        <strong>${data.name} ${data.lastname}</strong>
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >Candidate name</span
                                      >
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-bottom: 1px solid #ebebeb;
                                      margin-bottom: 26px;
                                      padding-bottom: 16px;
                                      display: block;
                                    "
                                  >
                                    <td style="vertical-align: top">
                                      <h3
                                        style="
                                          color: #4d4d4d;
                                          font-size: 20px;
                                          font-weight: 400;
                                          line-height: 30px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        <strong>${data.email}</strong>
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >Email</span
                                      >
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-bottom: 1px solid #ebebeb;
                                      margin-bottom: 26px;
                                      padding-bottom: 16px;
                                      display: block;
                                    "
                                  >
                                    <td style="vertical-align: top">
                                      <h3
                                        style="
                                          color: #4d4d4d;
                                          font-size: 20px;
                                          font-weight: 400;
                                          line-height: 30px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        <strong>${data.identification}</strong>
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >Identification</span
                                      >
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-bottom: 1px solid #ebebeb;
                                      margin-bottom: 26px;
                                      padding-bottom: 16px;
                                      display: block;
                                    "
                                  >
                                    <td style="vertical-align: top">
                                      <h3
                                        style="
                                          color: #4d4d4d;
                                          font-size: 20px;
                                          font-weight: 400;
                                          line-height: 30px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        <strong>${data.hold_technical_interview}</strong>
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >
                                        Can the candidate hold a technical interview in English?</span
                                      >
                                    </td>
                                  </tr>
                                  <tr
                                    style="
                                      border-bottom: 1px solid #ebebeb;
                                      margin-bottom: 26px;
                                      padding-bottom: 16px;
                                      display: block;
                                    "
                                  >
                                    <td style="vertical-align: top">
                                      <h3
                                        style="
                                          color: #4d4d4d;
                                          font-size: 20px;
                                          font-weight: 400;
                                          line-height: 30px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        <strong>${data.experience}</strong>
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >
                                        Experience</span
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="height: 25px">&nbsp;</td>
                </tr>
                <tr>
                  <td style="text-align: center">
                    <p
                      style="
                        font-size: 14px;
                        color: #455056bd;
                        line-height: 18px;
                        margin: 0 0 0;
                      "
                    >
                      &copy; <strong>www.joebarsolutions.com</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="height: 80px">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `,
    attachments: {
      filename: attachments[0].filename.filename,
      content: attachments[0].fileBuffer,
      contentType: attachments[0].filename.mimeType,
    },
  };
};

const handler = (req, res) => {
  if (req.method === 'POST') {
    const formData = {};
    const bb = busboy({ headers: req.headers });
    const files = [];
    const fileDate = [];

    bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
      file.on('data', (data) => {
        fileDate.push(data);
      });
      file.on('end', () => {
        files.push({
          fieldname,
          file,
          filename,
          encoding,
          mimetype,
          fileBuffer: Buffer.concat(fileDate),
        });
      });
    });

    bb.on('field', (fieldname, value) => {
      formData[fieldname] = value;
    });

    bb.on('finish', async () => {
      try {
        await transporter.sendMail({
          ...mailOptions,
          to: process.env.CANDIDATE_EMAIL,
          ...generateEmailContent(formData, files),
          subject: 'Apply for a job | Joe Bar landing page',
        });
        return res
          .status(200)
          .json({ message: 'Correo electrónico enviado con éxito' });
      } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
      }
    });

    bb.on('error', function (err) {
      return res.status(500).json({ message: err });
    });

    req.pipe(bb);
  }
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
