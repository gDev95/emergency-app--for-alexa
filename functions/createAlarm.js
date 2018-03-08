'use strict'

const axios = require('axios')

/*  Return the response of a HTTP POST Request to Safe Trek's REST API to create an alarm
  @param {object} address Address of Device
  @param {integer} type each service has a type number 1 - 3, 4 indicates all types are true
  @param {string} token Access Token for Rest Api
*/
module.exports = (address,type,token) => {
    // config from https://docs.safetrek.io/reference?d_utk=57272ce9-2a8c-4a92-b580-08e96f4d2d5b#create-alarm
    const config = {
      headers:{ 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    }
    const data = {
      "services": {
            "police": (type === 'police') ? true : false,
            "fire": (type === 'fire') ? true : false,
            "medical": (type === 'medical') ? true : false
          },
          "location.address": {
            "line1": address.addressLine1,
            "city": address.city,
            "state": address.stateOrRegion,
            "zip": address.postalCode
          }
    }
    return axios.post('https://api-sandbox.safetrek.io/v1/alarms',data, config)
      .then(response => {
        console.log('Response: ',response)
        return response
      })
      .catch(error => {
        console.log('Error caught: ',error)
        return Promise.reject(error)})
 
}
