var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/search.html'))
})

app.get('/article', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article.html'))
})

app.listen(3000, function() {
    console.log('Listening On 3000...')
});
