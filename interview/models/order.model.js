const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: [],
    cashier: { type: mongoose.Schema.Types.ObjectId, ref: 'Cashier' },
    total_price: { type: String, required: true },
    amount_paid: { type: String, required: true },
    change_returned: { type: String },
    payment_mode: { type: String, required: true, enum: ["POS", "Cash"] },
    isFulfilled: {type: Boolean, default: false},
    isCancelled: {type: Boolean, default: false}
}, {
    timestamps: true
});

orderSchema.set('toJSON', {
    virtuals: true
})

const Orders = mongoose.model('Orders', orderSchema);
exports.Orders = Orders;