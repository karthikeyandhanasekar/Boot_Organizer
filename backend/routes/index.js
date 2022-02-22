var express = require('express');
var router = express.Router();

const userSchema = require("../Schema/userSchema")


/* GET home page. */
router.get('/', function(req, res, next) {
  
});


router.post('/signin', async(req, res, next)=> {

  try {

    const result = await userSchema.create(req.body)
    console.log("it post");
    console.log(result);
    if(!!result)
    res.sendStatus(200)
    else
    res.status(401).json({errormessage:"Invalid Signin Process.."})


  } catch (error) {
    res.send(error);
  }
  
});



module.exports = router;
