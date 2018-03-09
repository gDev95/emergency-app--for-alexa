# Functions 

## getDeviceAddress (event)
Gets the full address (Street Address, City, State and Zip Code) from the device. 
Utilizes the **DeviceAddressService** from the Alexa SDK and its **getFullAddress** function. 
Takes an event as an argument.
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
Sends an HTTP POST request to the Safe Trek REST API.
It takes three arguments: an address, a type (medical, fire or police) and an access token.
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
