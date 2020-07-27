var express = require('express');
let app= express();
var path = require('path');
var router = express.Router();
let mailer = require('express-mailer');
app.set('views', path.join('/Users/seonghyuneom/dev/sing_up_express/', 'views'));
app.set('view engine', 'pug');

mailer.extend(app,{
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'intuseer.sheom@gmail.com',
      pass: 'djatjdgus1!'
    }
  });
  

router.post('/', function(req, res, next) {
    var id = req.body.id;
    var firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let phoneNumber = req.body.phonNumber;
    let address = req.body.address;
    let password = req.body.password;
   
    app.mailer.send('email', {
         to: id, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
         from: '"no-reply" <no-reply@example.com>',
         subject: '회원가입 인증코드',
        }, function (err) {
         if (err) {
          // handle errorconsole.log(err);
          res.send(err);
          return;
         }
         res.send('Email Sent');
        });
    console.log("## post request"); 
    // res.render('form', { title: 'result', id: id, firstName: firstName,
    //                     phoneNumber:phoneNumber
    //                     ,lastName: lastName, address: address, password: password
    //                     , method: "post" });
});



module.exports = router;
