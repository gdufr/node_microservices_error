
var config = {};

module.exports = function(config) {
    // Initialize opts in case it isn't passed in
    global.config = config || {};

    var errorHandler = require('./lib/errorHandler');
    return errorHandler;
}
 
