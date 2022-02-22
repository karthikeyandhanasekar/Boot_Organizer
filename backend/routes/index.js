var express = require('express');
const { hashdata, comparehashdata } = require('../bcrypt');
var router = express.Router();

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
      if (!!result)
        res.sendStatus(200)
      else
        res.status(401).json({ errormessage: "Invalid Signin Process.." })
    }



  } catch (error) {
    res.send(error);
  }

});


// verify userlogin account
router.post('/userlogin', async (req, res, next) => {

  try {
    const validemail = await userSchema.findOne({ email: req.body.email })
    if (!!validemail) {
      const validpassword = await comparehashdata(req.body.password, validemail.password)
      validpassword ? res.sendStatus(200) : res.send("Invalid Password")
    }
    else {
      res.send("Invalid Email")
    }

  } catch (error) {
    res.send(error);
  }

});



module.exports = router;
