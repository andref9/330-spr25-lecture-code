const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    categories: [String],
});

module.exports = mongoose.model('items', itemSchema);