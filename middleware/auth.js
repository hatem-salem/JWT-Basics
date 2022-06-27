const { UnAuthenticatedError } = require('../errors');

const jwt = require('jsonwebtoken')

const authenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnAuthenticatedError('No Token Provided');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username }

    } catch (error) {
        throw new UnAuthenticatedError('Not Authorized to access this route');
    }
    next();
}

module.exports = authenticationMiddleware;