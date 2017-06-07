var express = require('express'); 
 
var app = express(); 
var server = {};
var listening = false;
var transitioning = false;

app.get('/receive', function (req, res) { 
  res.send('Hi, this is the TwilioBot listening endpoint!'); 
}); 

module.exports.startEndpoint = function() {
    if(!transitioning && !listening)
    { 
        transitioning = true;
        server = app.listen(8080, function () { 
            console.log('TwilioBot listening on port 8080.'); 
            listening = true; 
            transitioning = false;
        });
    }
}

module.exports.stopEndpoint = function() {
    if(!transitioning && listening)
    {
        transitioning = true;
        server.close(); 
        listening = false; 
        transitioning = false; 
    }
}