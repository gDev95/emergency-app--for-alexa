# Functions 

## getDeviceAddress (event)
Gets the full address (Street Address, City, State and Zip Code) from the device. 
Utilizes the **DeviceAddressService** from the Alexa SDK and its **getFullAddress** function. 
The getFullAddress function requires an `apiConsentToken` (the token that grants permission to locate the device), `the apiEndpoint` and the `deviceId`. If any of the given arguments are invalid an error is thrown.
Returns a promise.
```
getDeviceAddress(event)
.then(data => {
  // process data
})
.catch(error => {
  // process error
})
```
## createAlarm (address, type, token)
Sends an HTTP POST request to the Safe Trek REST API through `axios`, a node module that works with Promises.
It requires a `url` and takes optionally a `config` and `data` parameter, The config parameter contains the header and the data parameter the post data.
Returns a promise
```
const accessToken = this.event.context.System.user.accessToken  
const address = {
  addressLine1: '5th Street',
  addressLine2: 'Apt 1111',
  city: 'Saint Charles',
  state: 'MO',
  zipCode: 63303
}
const type = 'medical'
createAlarm(accessToken, type, address)
.then(response => {
  //process response  
}
.catch(error => {
   //catch error
}
```
