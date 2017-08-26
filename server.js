var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/connection.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sendSubscription', function(req, res) {

    if (typeof(req.body.payload) === 'string') {

        const sendmail = require('sendmail')();

	sendmail({
    	from: 'sangenyx@gmail.com',
    	to: req.body.payload,
    	subject: 'Welcome To Doctorpedia News Letters!',
    	html: '<b>Thank you for subscribing to Doctorpedia News!</b>',
  	}, function(err, reply) {
   	 console.log(err && err.stack);
    	console.dir(reply);
	});		

        res.send('sent email');
        return;
    } else {
        res.send('error in sending email');
    }
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/404/routing.html'));
});

app.get('/A', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_A.html'));
});

app.get('/B', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_B.html'));
});

app.get('/C', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_C.html'));
});

app.get('/D', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_D.html'));
});

app.get('/E', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_E.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/search.html'));
});

app.get('/article', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article.html'));
});

app.get('/article-video', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article_video.html'));
});

app.get('/contact-us', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/contact_us.html'));
});

// app.listen(3000, function() {
//     console.log('Listening On http://138.68.248.193:8080/');
// });

app.listen(8080, '138.68.248.193', function() {
    console.log('Listening On http://138.68.248.193:8080/');
});
