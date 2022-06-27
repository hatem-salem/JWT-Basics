const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');
class UnAuthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message, StatusCodes.UNAUTHORIZED);
    }
}

module.exports = UnAuthenticatedError;