var express = require('express');
var browserify = require('browserify-middleware');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var bodyparser = require('body-parser');
var router = express.Router();

var FROM_GMAIL_USER = process.env.FROM_GMAIL_USER
var FROM_GMAIL_PASS = process.env.FROM_GMAIL_PASS
var TO_GMAIL_USER   = process.env.TO_GMAIL_USER

app.use(bodyparser.urlencoded({extended: true}))
app.use('/sayHello', router);
router.post('/', handleSayHello);

function handleSayHello (req, res) {

	var text = 'user_message: ' + req.body.user_message + '\n\nuser_email: ' + req.body.user_email;
	var mailOptions = {
		from: FROM_GMAIL_USER,
		to: TO_GMAIL_USER,
		subject: req.body.user_name + ' says hello!',
		text: text
	}
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: FROM_GMAIL_USER,
			pass: FROM_GMAIL_PASS
		}
	});

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error)
			res.json({yo: 'error'})
		} else {
			console.log('Message sent: ' + info.response);
			// TO DO: stop page from reloading
			//  - could resolve with replace state and anchors later
			res.json({yo: info.response})
		}
	})
}

var assetFolder = path.join(__dirname + '/../client/public')
app.use(express.static(assetFolder));

app.get('/', (req, res) => {
	res.sendFile(assetFolder + '/index.html')
})

app.get('/app-bundle.js', 
	browserify('./client/main.js', {
		transform: [[require('babelify'), { presets: ['es2015', 'react']}]]
	})
);

var port = process.env.PORT || 8080
app.listen(port);
console.log('listening on localhost:' + port)