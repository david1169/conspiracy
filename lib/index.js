console.log('Node is installed!');

var express = require('express');
var app = express();

app.use(express.static('public')); 
app.use('/jquery', express.static('node_modules/jquery/dist/'));

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});