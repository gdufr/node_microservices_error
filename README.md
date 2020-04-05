## Synopsis

*** Work in progress ***

This module contains the error handlers for the microservices app


## Initialization

```javascript
var errorHandler = require('error')(config);
```

Note: the () after the require statement is mandatory but the config object is optional.

errorHandler is an object with two properties: formatError and utilities

formatError expects an object with a NODE_CODE attribute that conforms to the NODE_CODE constants in application-configuration
The full list of NODE_CODES is available in application-configuration constants (appConfig.constants.get('/NODE_CODES'))

Example:

```javascript
// in your code, written as promise
var errorGeneratingFunction = function(parameters){
    
    return new Promise(resolve, reject){
        
        if (parameters.badStuff){
            errorHandler.formatError({
                    message:"Developer message that is super useful for debugging", 
                    NODE_CODE: "INTERNAL_NODE_ERROR"
                })
                .then(function(formattedErrorObject){
                    return reject(formattedErrorObject);
                })
                .catch(function(rejectionObject){
                    // this indicates that the formatError function didn't receive the required NODE_CODE
                    console.log(rejectionObject);
                })
        }else{
            // function stuff
            // resolve({result: "successful function stuff"});
        }
    }
}
