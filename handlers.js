'use strict'
const getDeviceAddress = require('./functions/getDeviceAddress')
const createAlarm = require('./functions/createAlarm')

module.exports = {
    
    'LaunchRequest': function () {
      this.emit(
        ':ask', 
        'What is your emergency?', 
        'How can I help you' 
      )
    },
    'GeneralHelpIntent': function () {
      const intentObj = this.event.request.intent
      // The intentRequest variable here is the IntentRequest object sent to the skill.
        if(!intentObj.slots.problem.value){
          const slotToElicit = 'problem'
          const speechOutput = 'What is the problem?'
          const repromptSpeech = speechOutput
          this.emit(
            ':elicitSlot', 
            slotToElicit, 
            speechOutput, 
            repromptSpeech
          )
        }
        else if(!intentObj.slots.help.value){
          const slotToElicit = 'help'
          const speechOutput = 'Who should we call, law enforcement, ambulance or fire fighters?'
          const repromptSpeech = speechOutput
          this.emit(
            ':elicitSlot', 
            slotToElicit, 
            speechOutput, 
            repromptSpeech
          )
        }
        else {
          console.log('Intent: ', intentObj)
        }
       
    },
    'InjuryHelpIntent': function () {
      const accessToken = this.event.context.System.user.accessToken
      const type = 'medical'  
      if(!accessToken){
        this.emit(
        ':tell', 
        'You have not linked your account for this skill. '+
        'Go into your Alexa app under skill, Safe Trek, manage settings and link your account. '
        )
      }  
      getDeviceAddress(this.event)
        .then((address) => {
            console.log('Device Address: ', address)
            createAlarm(address,type,accessToken)
                .then(() => {
                this.emit(
                  ':tell', 
                  'We contacted Safe Trek\'s emergency service for medical help.'
                )
                })
                .catch(error => {
                console.log('Error message: ',error)
                this.emit(
                  ':tell', 
                  'Something went wrong while contacting Safe Trek. Try again.'
                  )
                })
            })
        .catch((error) => {
            console.log('Error message: ',error)
            this.emit(
              ':tell', 
              'We could not access the location of your device. '+
              'In order to use this skill '+
              'we need to permission to locate you. '+
              'To enable it go to the Alexa app under skills, Safe Trek, manage settings. '
              )
            })      
    },
    'FireHelpIntent': function () {
      const accessToken = this.event.context.System.user.accessToken  
      const type = 'fire'  
      if(!accessToken){
        this.emit(
        ':tell', 
        'You have not linked your account for this skill. '+
        'Go into your Alexa app under skill, Safe Trek, manage settings and link your account. '
        )
      }  
      getDeviceAddress(this.event)
        .then((address) => {
            console.log('Device Address: ', address)
            createAlarm(address,type,accessToken)
                .then(() => {
                this.emit(
                  ':tell', 
                  'We contacted Safe Trek\'s emergency service.'
                )
                })
                .catch(error => {
                console.log('Error message: ',error)
                this.emit(
                  ':tell', 
                  'Something went wrong while contacting Safe Trek. Try again.'
                  )
                })
            })
        .catch((error) => {
            console.log('Error message: ',error)
            this.emit(
              ':tell', 
              'We could not access the location of your device. '+
              'In order to use this skill '+
              'we need to permission to locate you. '+
              'To enable it go to the Alexa app under skills, Safe Trek, manage settings. '
              )
            })      
    },
    'PoliceHelpIntent': function () {
      const accessToken = this.event.context.System.user.accessToken 
      const type = 'police'   
      if(!accessToken){
        this.emit(
        ':tell', 
        'You have not linked your account for this skill. '+
        'Go into your Alexa app under skill, Safe Trek, manage settings and link your account. '
        )
      }  
      getDeviceAddress(this.event)
        .then((address) => {
            console.log('Device Address: ', address)
            createAlarm(address,type ,accessToken)
                .then(() => {
                this.emit(
                  ':tell', 
                  'We contacted Safe Trek\'s emergency service for police help.'
                )
                })
                .catch(error => {
                console.log('Error message: ',error)
                this.emit(
                  ':tell', 
                  'Something went wrong while contacting Safe Trek. Try again.'
                  )
                })
            })
        .catch((error) => {
            console.log('Error message: ',error)
            this.emit(
              ':tell', 
              'We could not access the location of your device. '+
              'In order to use this skill '+
              'we need to permission to locate you. '+
              'To enable it go to the Alexa app under skills, Safe Trek, manage settings. '
              )
            })      
    },
    'AMAZON.HelpIntent': function () {
      this.emit(
        ':ask', 
        'ask or tell Safe Trek to get help', 
        'anything else I can help you with?'
      )
    },
    'AMAZON.CancelIntent': function () {
      this.emit(
        ':tell', 
        'Stay safe!'
      )
    },
    'AMAZON.StopIntent': function () {
      this.emit(
        ':tell', 
        'Stay safe!'
      )
    },
    'Unhandled' : function () {
      this.emit(
        ':tell', 
        'Stay safe!'
      )
    }
}

