const { Schema, model } = require('../connection');
const mySchema = new Schema({
    title: String,
    description: { type: String, unique: false },
    location: { type: String, required: true },
    price: { type: Number },
    imageUrl: { type: String , default: 'unknown' },
    features: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }

})

module.exports = model('propertydata', mySchema);