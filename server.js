var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/A', function(req, res) {
    res.sendFile(path.join(__dirname, './public/Index_A.html'))
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
    res.sendFile(path.join(__dirname, './public/templates/search.html'))
});

app.get('/article', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article.html'))
});

app.listen(3000, function() {
    console.log('Listening On 3000...')
});
