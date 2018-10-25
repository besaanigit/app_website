var express  = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
//post router
router.post('/send', function(req, res, next){
 var transport = nodemailer.createTransport({
    //service and crodontials.
    service:'gmail',
    auth: {
    	user: 'moh.abdilatiif@gmail.com',
    	pass: 'somepasswd'
    }

 });
   var mailOptions = {
   	from: 'besaani - <moh.abdilatiif@gmail.com>',
   	to: 'ibraahinaxmedciise@gmail.com',
   	subject: 'Contact from besaani.com',
   	//plain text version.
   	text: 'You have new message from'+ req.body.name +'@besaani.com\n' +'email:'+ req.body.email +'Message:' + req.body.message,//ve have name,email and message.
   	html: '<h3>You have a new message !</h3><br/><ul><li>from :'+ req.body.name + '@besaani.com</li><li>' + 'Email :' + req.body.email + '</li><li><p>' + req.body.message + '</p></li></ul>'
   }

   transport.sendMail(mailOptions, function (error,info) {
   	  if(error){
   	  	console.log('Email could not be sent !\n' + error);
   	  	res.redirect ('/');

   	} else{
   		console.log('Message sent succesfully !\n' + info.response );
   		res.redirect('/');
   		
   	}

   });

});


module.exports = router;
