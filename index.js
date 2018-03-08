

'use strict'

const Alexa = require('alexa-sdk')
const handlers = require('./handlers')
const APP_ID = 'amzn1.ask.skill.751f0d0c-e3d9-4ac4-934b-d6a7d84a4a13'  // TODO replace with your app ID (OPTIONAL).

module.exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context)
    alexa.APP_ID = APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute()
}
