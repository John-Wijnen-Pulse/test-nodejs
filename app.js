/*const repl = require('repl');
const calc = require('./calculate.js');
const twilio = require('./twilio.js'); */
const endpoint = require('./rest-endpoint.js');

/*var replServer = repl.start();

replServer.context.doCalculations = function() {
    calc.doCalculations();
}

replServer.context.sendSMS = function(to_number, message) {
    twilio.sendSMS(to_number, message);
}

replServer.context.sendMMS = function(to_number, message, image) {
    twilio.sendMMS(to_number, message, image);
}

replServer.context.startRestEndpoint = function() {
    endpoint.startEndpoint(process.env.port);
}

replServer.context.stopRestEndpoint = function() {
    endpoint.stopEndpoint();
} */

endpoint.startEndpoint(process.env.port);