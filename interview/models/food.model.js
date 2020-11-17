const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    title: { type: String, required: true },
    price: { type: String },
    category: { type: String }
}, {
    timestamps: true
});

menuSchema.set('toJSON', {
    virtuals: true
})

const Menu = mongoose.model('Food Menu', menuSchema);
exports.FoodMenu = Menu;