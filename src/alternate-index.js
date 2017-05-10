/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

//text
var HELP_MESSAGE="";
var STOP_MESSAGE="";
var LAUNCH_MESSAGE="So it is down to you. And it is down to me. If you wish her dead, by all means keep moving forward.";
var responses = {
  "IntentOne": "There's nothing to explain. You're trying to kidnap what I've rightfully stolen.",
  "IntentTwo": "There will be no arrangement<break strength='x-strong'/>and you're killing her!",
  "IntentThree": "I'm afraid so<break strength='x-strong'/>I can't compete with you physically.<break strength='x-strong'/>And you're no match for my brains.",
  "IntentFour": "Let me put it this way<break strength='x-strong'/>have you ever heard of Plato, Aristotle, Socrates?",
  "IntentFive": "Morons."
}

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', LAUNCH_MESSAGE, "");
    },
    'Unhandled': function(){
      this.emit('lookup', this.event.request.intent.name);
    },

    'lookup': function (intent) {
        console.log(intent);
        var askOrTell=":ask"
        if(intent=="five"){askOrTell=":tell"}
        this.emit(askOrTell, responses[intent], responses[intent] );
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_MESSAGE;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

// 3. Helper Function  =================================================================================================
