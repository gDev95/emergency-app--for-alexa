'use strict'
const axios = require('axios')
module.exports = (address, token) => {
    const config = {
      headers:{ 
        'Content-Type': 'application/json', 
        'Authentication': `Bearer ${token}`
      }
    }

    const body = {
      "services": {
            "police": false,
            "fire": false,
            "medical": true
          },
          "location.address": {
            "line1": address.addressLine1,
            "city": address.city,
            "state": address.state,
            "zip": address.zipcode
          }
    }
    return axios.post('https://api-sandbox.safetrek.io/v1/alarms', body,config)
      .then(response => {
        console.log('Response: ',response)
        return response})
      .catch(error => {
        console.log('Error: ',error)
        return error})
 
}
