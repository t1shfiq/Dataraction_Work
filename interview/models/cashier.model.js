const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cashierSchema = new Schema({
    title: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] }
}, {
    timestamps: true
});

cashierSchema.set('toJSON', {
    virtuals: true
})

const Cashier = mongoose.model('Cashier', cashierSchema);
exports.Cashier = Cashier;