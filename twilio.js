const dotEnv = require('dotenv');
dotEnv.config( { path: '.env' });
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports.sendSMS = function(to_number, message) {
    client.api.messages.create({ 
        body: message || 'Greetings earthling, this is the TwilioSmsBot sending you some data bytes ;)', 
        to: to_number,  // Number that receives the SMS 
        from: process.env.TWILIO_SENDING_PHONE_NUMBER // Purchased Twilio number that send the SMS 
    }).then(function(data) {
      console.log('Administrator notified');
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error(err);
    }); 
}

module.exports.sendMMS = function(to_number, message, image) {
    client.api.messages.create({ 
        body: message || 'Greetings earthling, this is the TwilioSmsBot sending you some data bytes ;)', 
        to: to_number,  // Number that receives the SMS 
        from: process.env.TWILIO_SENDING_PHONE_NUMBER // Purchased Twilio number that send the SMS 
    }).then(function(data) {
      console.log('Administrator notified');
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error(err);
    }); 
}