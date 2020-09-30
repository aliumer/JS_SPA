const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.use('/public', express.static('public'))

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
    console.log('request received');
});
