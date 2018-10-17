var express  = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Contact', { title: 'contact' });
});
//post router
router.post('/send', function(reg,res,next){
 var transport = nodemailer.createTransport({
    //service and crodontials.
    service:'Gmail',
    auth: {
    	user: 'moh.abdilatiif@gmail.com',
    	pass: 'somepasswd'
    }

 });
   var mail0p= {
   	from: 'besaani - <moh.abdilatiif@gmail.com>',
   	to: 'ibraahinaxmedciise@gmail.com',
   	subjec: 'Contact from besaani.com',
   	//plain text version.
   	text: 'You have new message from'+ reg.body.name +'@besaani.com\n' +'email:'+ reg.body.email +'Message:' + reg.body.message,//ve have name,email and message.
   	html: '<h3>You have a new message !</h3><br/><ul><li>from :'+ reg.body.name + '@besaani.com</li><li>' + '@email :' + reg.body.email + '</li><li><p>' + reg.body.message + '</p></li></ul>'
   };

   transport.sendMail(mail0p, function (error,info) {
   	  if(error){
   	  	console.log("Email could not be sent !\n" + error);
   	  	res.redirect ('/');

   	} else{
   		console.log("Message sent succesfully !\n"+ info.response );
   		res.redirect('/');
   	}

   });

});


module.exports = router;
