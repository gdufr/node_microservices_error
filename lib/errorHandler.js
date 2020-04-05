var appConfig = require('application-configuration')();

/**
 *
 * @param errorObject Object
 * @param errorObject.message (optional) message useful for debugging this error
 * @param errorObject.NODE_CODE (required) code that matches an available code in application-configuration.constants.NODE_CODES
 *
 * @returns the formatted error object from application_configuration
 */
module.exports.formatError = function (errorObject) {

    return new Promise(function (resolve, reject) {

        if (!errorObject) {
            return reject(appConfig.constants.get('/NODE_CODES/INTERNAL_NODE_ERROR'));
        }

        let nodeErr = appConfig.constants.get('/NODE_CODES/' + errorObject.NODE_CODE);

        if (nodeErr) {
            return resolve(nodeErr);
        } else {
            return resolve(appConfig.constants.get('/NODE_CODES/INTERNAL_NODE_ERROR'));
        }
    })
};
