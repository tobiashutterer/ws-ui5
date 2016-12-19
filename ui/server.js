var express = require('express');
var app = express();

//var oneDay = 86400000;
var oneDay = 1;

app.use(express.compress());

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000, function () {
    console.log('webserver %s', 'listening on port 3000');
});
