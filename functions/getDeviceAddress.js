'use strict'
const Alexa = require('alexa-sdk')


module.exports = function (event) {
  return new Promise ((resolve,reject) => {
    const token = event.context.System.apiAccessToken
    const apiEndpoint = event.context.System.apiEndpoint
    const deviceId = event.context.System.device.deviceId
    console.log(
      `Token: ${token} \n 
       Api Endpoint: ${apiEndpoint}
       Device ID: ${deviceId}`)
    const deviceAddressService = new Alexa.services.DeviceAddressService()
    deviceAddressService.getFullAddress(deviceId,apiEndpoint,token).then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err.message)
      })
    })
}