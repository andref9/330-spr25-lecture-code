module.exports = function isValidationError(error) {
    // Mongoose error when schema validation fails
    return error.name === 'ValidationError';
}