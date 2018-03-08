# Functions 

## getDeviceAddress ()
Gets the full address (Street Address, City, State and Zip Code) from the device. 
Utilizes the **DeviceAddressService** from the Alexa SDK and its **getFullAddress** function. 
The getFullAddress function requires an `apiConsentToken` (the token that grants permission to locate the device), `the apiEndpoint` and the `deviceId`. If any of the given arguments are invalid an error is thrown.

## createAlarm
Sends an HTTP POST request to the Safe Trek REST API through `axios`, a node module that works with Promises.
It requires a `url` and takes optionally a `config` and `data` parameter, The config parameter contains the header and the data parameter the post data.
