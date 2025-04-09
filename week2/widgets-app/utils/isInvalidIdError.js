module.exports = function isInvalidIdError(error) {
    // Mongoose error when the ID is invalid
    return error.name === 'CastError';
}