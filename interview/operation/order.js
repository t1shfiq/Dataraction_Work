const OrderModel = require('../models/order.model');

const addOrder = (items, cashier, total_price, amount_paid, change_returned, payment_mode) => {
    return new Promise((resolve, reject) => {
        const params = {
            items,
            cashier,
            total_price,
            amount_paid,
            change_returned,
            payment_mode
        }
        let order = new OrderModel.Orders(params);
        
        try{
            resolve(order.save());
        }catch(e){
            reject(e)
        }
    });
}

const getOrder = (id) => {
    return new Promise((resolve, reject) => {
        try{
            OrderModel.Orders.findById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

const getOrders = () => {
    return new Promise((resolve, reject) => {
        try{
            OrderModel.Orders.find((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

const fulfilOrder = (id) => {
    return new Promise((resolve, reject) => {
        try{
            OrderModel.Orders.findByIdAndUpdate(id, {isFulfilled: true}, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

const deleteOrder = (id) => {
    return new Promise((resolve, reject) => {
        try{
            OrderModel.Orders.findByIdAndUpdate(id, {isCancelled: true}, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

module.exports = { addOrder, getOrders, getOrder, fulfilOrder, deleteOrder };