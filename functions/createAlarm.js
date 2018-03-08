'use strict'
const axios = require('axios')
module.exports = (address, token) => {
    console.log("Token received: ", token)
    console.log('Address received: ', address)
    const config = {
      headers:{ 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    }

    const data = {
      "services": {
            "police": false,
            "fire": false,
            "medical": true
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
        return response})
      .catch(error => {
        console.log('Error caught: ',error)
        return Promise.reject(error)})
 
}
