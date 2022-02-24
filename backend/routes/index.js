var express = require('express');
const { hashdata, comparehashdata } = require('../bcrypt');
var router = express.Router();
const nodemailer = require("nodemailer");


const userSchema = require("../Schema/userSchema")
const adminschema = require("../Schema/adminschema")
const bootcampschema = require("../Schema/bootcampschema")




/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const currentdate = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getYear()
    const result = await bootcampschema.find({ status: "open" }).sort({ orgdate: 1 })
    if (result) {
      res.json({
        message: "OK",
        value: result
      })
    }
    else {
      res.json({
        message: "Sorry for inconvience.kindly contact our support"
      })
    }
  } catch (error) {
    console.error(error.message);
  }
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
        message: "Invalid Email/Not Exist"
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
        message: "Invalid Email/Not Exist"
      })
    }
  } catch (error) {
    res.send(error);
  }

});

// forgotpassword
router.put('/forgotpassword', async (req, res, next) => {

  try {
    const validemail = await userSchema.findOne({ email: req.body.email })
    if (!!validemail) {
      const result = await userSchema.findOneAndUpdate({ email: req.body.email }, { password: await hashdata(req.body.password) })
      console.log(result);
      if (result)
        res.json({
          message: "OK"
        })
    }
    else {
      res.json({
        message: "Invalid Email/Not Exist"
      })
    }
  } catch (error) {
    res.send(error);
  }

});

//insert campdetails in mongodb
router.post('/addcamp', async (req, res, next) => {

  try {
    const isnameexist = await bootcampschema.findOne({ name: req.body.name })
    if (!!isnameexist) {
      res.json({
        message: "Bootcamp already exist..Try another name"
      })
    }
    else {
      const result = await bootcampschema.create(req.body)
      if (result)
        res.json({
          message: "OK"
        })
      else
        res.json({
          message: "Error Occured.Try Again"
        })
    }
  } catch (error) {
    res.send(error);
  }

});



module.exports = router;
