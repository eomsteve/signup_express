var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let temp = req.body.num;
  let confirm = req.body.tempCode;
  console.log(temp);
  console.log(req.body);
  
  
  if(temp == confirm){
      res.send("회원가입 성공!")
  }else{

     res.send(`${temp}, ${confirm},${req.body}`)
    
    }
});

module.exports = router;
