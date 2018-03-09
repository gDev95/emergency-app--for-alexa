# Handlers

## LaunchRequest
The `LaunchRequest` is the intent evoked by the invocation name, the name that the user says to start the skill. (e.g **safe trek**) The user is than prompted what emergency he has

## InjuryHelpIntent 
The `InjuryHelpIntent` is called in case some is hurt and injured and uses one of the following utterances:
```
"get a doctor",
"get medics",
"get medical assistance",
"get an ambulance",
"someone got hurt",
"I cut myself",
"I got injured",
"I got hurt",
"I hurt myself",
"I think I broke something",
"I think I tore something",
"call an ambulance",
"someone got injured",
"help we need an ambulance",
"ambulance"
```
which then calls `getDeviceAddress` and on success makes an API Call through ` createAlarm` setting `services.medical` to `true` 

## FireHelpIntent
The 'FireHelpIntent` is called in case of a fire and/or injuries and uses the following utterances:
```
"call the fire station",
"call the fire fighters",
"call the fire department",
"fire",
"there is a fire",
"we need to put down the fire",
"call the fire fighter",
"get a fire truck",
"we need a fire truck"
```
which then calls `getDeviceAddress` and on success makes an API Call through ` createAlarm` setting `services.fire` to `true` 

## PoliceHelpIntent
The `PoliceHelpIntent` is called in case of a threat through a third person or any other safety issue and uses the following utterances:
```
"someone has followed me ",
"I am in a dangerous situation",
"get the police",
"call the police",
"I am in danger",
"someone is threating me ",
"come protect me "
```
which then calls `getDeviceAddress` and on success makes an API Call through ` createAlarm` setting `services.police` to `true` 

## GeneralHelpIntent
The `GeneralHelpIntent` is designed so that a more general statement is handled appropriately. It starts a dialog using the following utterances:
```
get help please",
"help me",
"call nine-one-one",
"call nine one one ",
"Something has happened",
"I need help ",
"I have an emergency",
"get help "
```
where Alexa will ask what the problem is. If the statement about the problem is a sample utterances in the intents above, the appropriate attend is triggered.

## AMAZON.HelpIntent || CancelIntent || StopIntent
These standard intents are exactly doing what they supposed to stopping and canceling a command or the skill and explaining how to trigger intents.
