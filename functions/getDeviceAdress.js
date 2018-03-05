'use strict'
const Alexa = require('alexa-sdk')

module.exports.getDeviceAddress = function () {
  if(this.event.context.System.user.permission) {
    const token = this.event.context.System.user.permission.consentToken
    const apiEndpoint = this.event.contet.System.apiEndpoint
    const deviceId = this.event.context.System.device.deviceId
    const deviceAddressService = new Alexa.services.DeviceAddressService()

    deviceAddressService.getFullAddress(deviceId,apiEndpoint,token)
    .then((data) => {
      console.log(`Address at ${JSON.stringify(data)}`)
    })
    .catch((err) => {
      this.emit(':tell','I am sorry, something went wrong')
      console.log(err.message)
    })
  }
  else {
    this.emit(':tell', 'We could not access your location because we got no permission')
  }
}
