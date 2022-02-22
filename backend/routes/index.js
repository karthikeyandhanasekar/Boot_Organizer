var express = require('express');
const { hashdata, comparehashdata } = require('../bcrypt');
var router = express.Router();
const nodemailer = require("nodemailer");


const userSchema = require("../Schema/userSchema")


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
      text: `Hi ${req.body.name} , thanks for registering our compay. Soon we will contact you..`,

    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    next()
  } catch (error) {
    res.send(error);
  }

});

router.post('/signin', async (req, res, next) => {

  res.sendStatus(200)
})


// verify userlogin account
router.post('/userlogin', async (req, res, next) => {

  try {
    const validemail = await userSchema.findOne({ email: req.body.email })
    if (!!validemail) {
      const validpassword = await comparehashdata(req.body.password, validemail.password)
      if (validpassword) {
        // const user ={
        //   name:validemail.name,
        //   email:validemail.email,
        //   phoneno:validemail.phoneno,
        //   token:  Math.floor(Math.random*100)
        // }
        // console.log(user);
        // req.session = user
        // console.log(req.session);
        res.status(200)

      }
      else res.send("Invalid Password")
    }
    else {
      res.send("Invalid Email")
    }


  } catch (error) {
    res.send(error);
  }

});



module.exports = router;
