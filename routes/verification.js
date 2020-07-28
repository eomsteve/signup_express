var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let temp = req.body.num;
  let confirm = req.session.temp.tempCode;
  console.log(temp);
  console.log(confirm);
  
  
  if(temp == confirm){
      req.session.destroy(
         (err) =>{
            if (err) {
                console.log('세션 삭제시 에러');
                return;
            }
            console.log('세션 삭제 성공');
            res.clearCookie('key');
            res.redirect('/');
        }
        
    ); 

  }else{

     res.send(`${temp}, ${confirm},${req.body}`)
    
    }
});

module.exports = router;
