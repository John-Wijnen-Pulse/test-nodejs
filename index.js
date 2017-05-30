const repl = require('repl');
const calc = require('./calculate');
const twilio = require('./twilio');

var replServer = repl.start();

replServer.context.doCalculations = function() {
    calc.doCalculations();
}

replServer.context.sendSMS = function(to_number, message) {
    twilio.sendSMS(to_number, message);
}