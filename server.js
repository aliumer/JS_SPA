var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;
var app = express();
app.use(bodyParser.json());

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
    console.log('request received');
});
