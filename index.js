/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict'

const Alexa = require('alexa-sdk')
const getDeviceAdress = require('./functions/getDeviceAdress')
const APP_ID = undefined  // TODO replace with your app ID (OPTIONAL).



const handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', 'What is your emergency?', 'How can I help you' )
    },
    'InjuryHelpIntent': function () {
      
      this.emit(':tell', 'An ambulance is on the way!')
    },
    'FireHelpIntent': function () {
      getDeviceAdress()
      this.emit(':tell', 'A fire truck is on the way!')
    },
    'PoliceHelpIntent': function () {
      this.emit('tell', 'The police has been notified')
    },
    'AMAZON.HelpIntent': function () {
      const speechOutput = this.t('HELP_MESSAGE')
      const reprompt = this.t('HELP_MESSAGE')
      this.emit(':ask', speechOutput, reprompt)
    },
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', this.t('STOP_MESSAGE'))
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', this.t('STOP_MESSAGE'))
    },
}

module.exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context)
    alexa.APP_ID = APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute()
}
