const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jewelrySchema = new Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    gemstone_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gemstone',
    }],
    material_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material',
        required: true
    },
    material_weight: {
        type: Number,
        required: true
    },
    subgemstone_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gemstone',
    }],
    category: {
        type: String,
        enum: ["Ring", "Necklace", "Bracelet", "Earrings", "Other"],
        required: true
    },
    type: {
        type: String,
        enum: ["Sample", "Custom"],
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    images: [{
        type: String
    }],
    image_public_ids: [{
        type: String
    }]
}, {timestamps: true})

module.exports = mongoose.model('Jewelry', jewelrySchema)