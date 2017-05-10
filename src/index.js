'use strict';
var Alexa = require('alexa-sdk');


//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        var speechOutput="So it is down to you. And it is down to me. If you wish her dead, by all means keep moving forward.";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'IntentOne': function () {
        //user line "let me explain"
        var speechOutput="There's nothing to explain. You're trying to kidnap what I've rightfully stolen.";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'IntentTwo': function () {
        //user line "perhaps an arrangement can be reached"
        var speechOutput="There will be no arrangement<break strength='x-strong'/>and you're killing her!";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'IntentThree': function () {
        //user line "but if there can be no arrangement then we are at an impasse"
        var speechOutput="I'm afraid so<break strength='x-strong'/>I can't compete with you physically.<break strength='x-strong'/>And you're no match for my brains.";
        this.emit(":ask", speechOutput, speechOutput);
        
    },
    'IntentFour': function () {
        //user line "youre that smart"
        var speechOutput="Let me put it this way<break strength='x-strong'/>have you ever heard of Plato, Aristotle, Socrates?";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'IntentFive': function () {
        //user line "yes I have"
        var speechOutput="Morons."
        this.emit(":tell", speechOutput, speechOutput);
        
    },
    
 
    'AMAZON.CancelIntent': function () {
        this.emit(":tell", "goodbye");
    },
    'AMAZON.StopIntent': function () {
        this.emit(":tell", "goodbye");

    }
};


