import { mailOptions, transporter } from './nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  organization: 'Organization',
  message: 'Message',
};

const generateEmailContent = (data) => {
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
                                  A customer wants to contact
                                </h1>
                                <p
                                  style="
                                    font-size: 15px;
                                    color: #455056;
                                    line-height: 24px;
                                    margin: 8px 0 30px;
                                  "
                                >
                                  Here are the customer's contact information and
                                  message
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
                                        <strong>${
                                          data.name
                                        }</strong>, represents the
                                        company: ${data.organization}
                                      </h3>
                                      <span style="color: #737373; font-size: 14px"
                                        >Name and organization</span
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
                                  <tr style="display: block">
                                    <td style="vertical-align: top">
                                      <p
                                        style="
                                          color: #4d4d4d;
                                          font-weight: 400;
                                          line-height: 25px;
                                          margin-bottom: 3px;
                                          margin-top: 0;
                                        "
                                      >
                                        ${data.message || 'Without message'}
                                      </p>
                                      <span style="color: #737373; font-size: 14px"
                                        >This is the message</span
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
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.organization || !data.email || !data.message)
      return res.status(400).json({ message: 'Bad request' });
    try {
      await transporter.sendMail({
        ...mailOptions,
        to: process.env.CONTACT_EMAIL,
        ...generateEmailContent(data),
        subject: 'A customer wants to contact | Joe Bar landing page',
      });
      return res.status(200).json({ status: 200 });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
