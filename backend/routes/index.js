var express = require('express');
const { hashdata, comparehashdata } = require('../bcrypt');
var router = express.Router();
const nodemailer = require("nodemailer");


const userSchema = require("../Schema/userSchema")
const adminschema = require("../Schema/adminschema")



/* GET home page. */
router.get('/', function (req, res, next) {

});



//post for createuser account
router.post('/signin', async (req, res, next) => {

  try {
    const data = req.body

    const validemail = await userSchema.findOne({ email: data.email })
    if (!!validemail) {
      res.send("Email already exists")
    }
    else {
      data.password = await hashdata(data.password)
      const result = await userSchema.create(data)
      console.log(!!result);
      if (!!result) {
        next()
        // res.sendStatus(200)
      }
      else
        res.status(401).json({ errormessage: "Invalid Signin Process.." })
    }
  } catch (error) {
    res.send(error);
  }

});

//welcome mail
router.post('/signin', async (req, res, next) => {

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dkmailpratice@gmail.com", // generated ethereal user
        pass: "karthik!123",
      }
    });

    const mailOptions = {
      from: 'dkpraticemail@gmail.com',  // sender address
      to: req.body.email,   // list of receivers
      subject: 'Account Registered',
      text: `Hi ${req.body.name} , thanks for registering our company. Soon we will contact you..`,

    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else {
        console.log("Info :");
        console.log(info);
        res.sendStatus(200)
      }
    });

  } catch (error) {
    res.send(error);
  }

});

// verify userlogin account
router.post('/userlogin', async (req, res, next) => {

  try {
    console.log(req.body);
    const validemail = await userSchema.findOne({ email: req.body.email })
    if (!!validemail) {
      const validpassword = await comparehashdata(req.body.password, validemail.password)
      if (validpassword) {
        console.log(validemail);
        res.json({
          message: "OK",
          email: validemail.email,
          name: validemail.name,
          phoneno: validemail.phoneno,
        })
      }
      else
        res.json({
          message: "Invalid Password"
        })
    }
    else {
      res.json({
        message: "Invalid Email"
      })
    }
  } catch (error) {
    res.send(error);
  }

});
// verify adminlogin account
router.post('/adminlogin', async (req, res, next) => {

  try {
    const validemail = await adminschema.findOne({ email: req.body.email })
    console.log(validemail);
    if (!!validemail) {
      if (req.body.password === validemail.password) {
        res.json({
          message: "OK",
        })
      }
      else
        res.json({
          message: "Invalid Password"
        })
    }
    else {
      res.json({
        message: "Invalid Email"
      })
    }
  } catch (error) {
    res.send(error);
  }

});


module.exports = router;
