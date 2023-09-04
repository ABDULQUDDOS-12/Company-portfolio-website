const mailgen = require("mailgen");
const nodemailer = require("nodemailer");
const { EMAIL,PASSWORD} = require("../env.js");
const getbill = (req, res) => {
  const { email, name,  phone, message } = req.body;
    let config = {
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    };
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new mailgen({
      theme: "salted",
      product: {
        name: "Squad Tech international private limited",
        link: "https://www.squadtechsolution.com/",
      },
    });
    let response = {
      body: {
        name: "Abdul Quddos",
        intro: `quote form reponse from ${name}`,
        table: {
          data: [
            {
              Message: message, // Placeholder for the message
            },
          ],
        },
        outro:  `Email: ${email} and Phone:${phone}`,
      },
    };
    let mail = MailGenerator.generate(response);
    let body= {
      from:email,
      to: EMAIL,
      subject: "Get a Quote form",
      html: mail,
    };
    transporter.sendMail(body)
    .then(() => {
      return res
        .status(201)
        .json({
          msg: "you should receive an email",
        });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
    // res.status(201).json("get Bill Successfully...!");
  };
  module.exports = {
    // signup,
    getbill,
  };