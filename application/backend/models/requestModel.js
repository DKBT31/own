const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Sub-schema for status history
const statusHistorySchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ['pending', 'assigned', 'accepted', 'completed', 'quote', 'deposit_design', 'design', 'design_completed', 'deposit_production', 'production', 'warranty', 'payment', 'cancelled'],
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const requestSchema = new Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    jewelry_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Jewelry'
    },
    request_description: {
        type: String,
        maxlength: 1000,
    },
    request_status: {
        type: String,
        required: true,
        enum: ['pending', 'assigned', 'accepted', 'completed', 'quote', 'deposit_design', 'design', 'design_completed', 'deposit_production', 'production', 'warranty', 'payment', 'cancelled'],
        default: 'pending'
    },
    status_history: [statusHistorySchema],
    quote_content: {
        type: String
    },
    quote_amount: {
        type: Number
    },
    production_start_date: {
        type: Date
    },
    production_end_date: {
        type: Date
    },
    production_cost: {
        type: Number
    },
    design_images: [{
        type: String
    }],
    warranty_content: {
        type: String
    },
    warranty_duration: {
        type: Number
    },
    warranty_start_date: {
        type: Date
    },
    warranty_end_date: {
        type: Date
    },
    images_public_ids: [{
        type: String
    }],
    user_feedback_quote: {
        type: Array
    },
    user_feedback_design: {
        type: Array
    },
    manager_feedback_quote: {
        type: Array
    },
}, {timestamps: true});

module.exports = mongoose.model('Request', requestSchema);
