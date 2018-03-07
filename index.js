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
const getDeviceAddress = require('./functions/getDeviceAddress')
const sendHelp = require('./functions/sendHelp')
const APP_ID = 'amzn1.ask.skill.751f0d0c-e3d9-4ac4-934b-d6a7d84a4a13'  // TODO replace with your app ID (OPTIONAL).



const handlers = {
    
    'LaunchRequest': function () {
      this.emit(':ask', 'What is your emergency?', 'How can I help you' )
    },
    'InjuryHelpIntent': function () {
      const accessToken = this.event.context.System.user.accessToken
      const userId= this.event.context.System.user.userId
      console.log('user id: ', userId)
      //console.log("accessToken", accessToken)
      getDeviceAddress(this.event)
        .then((address) => {
        sendHelp(address,accessToken)
        .then(response => {
          console.log(response)
          this.emit(':tell', 'success')
        })
        .catch(error => {
          console.log(error)
          this.emit(':tell','failure')
        })

      })
      .catch((error) => {
        console.log('Error message: ',error)
        this.emit(':tell', error)
      })
      
      
    },
    'FireHelpIntent': function () {
      
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
