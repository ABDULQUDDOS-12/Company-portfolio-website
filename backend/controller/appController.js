const mailgen = require("mailgen");
const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env.js");

const getbill = (req, res) => {
    const { userEmail } = req.body;
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
        name: "Daily tution",
        intro: "Your bill has arrived",
        table: {
          data: [
            {
              item: "Nodemailer Stack book",
              description: "A backend application",
              price: "$10.99",
            },
          ],
        },
        outro: "looking forward to do more buisness",
      },
    };
    let mail = MailGenerator.generate(response);
    let message = {
      from: EMAIL,
      to: userEmail,
      subject: "Place Order",
      html: mail,
    };
    transporter.sendMail(message)
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