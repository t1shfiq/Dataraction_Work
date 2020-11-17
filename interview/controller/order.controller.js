const operations = require('../operation/order');

exports.addOrder = async (req, res) => {
    try{
        const { 
            items,
            cashier,
            total_price,
            amount_paid,
            change_returned,
            payment_mode
        } = req.body
        const response = await operations.addOrder(items, cashier, total_price, amount_paid, change_returned, payment_mode);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.getOrder = async (req, res) => {
    try{
        const {id} = req.params; 
        const response = await operations.getOrder(id);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.getOrders = async (req, res) => {
    try{
        const response = await operations.getOrders();

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.fulfilOrder = async (req, res) => {
    try{
        const {id} = req.params;    
        const response = await operations.fulfilOrder(id);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.cancelOrder = async (req, res) => {
    try{
        const {id} = req.params;    
        const response = await operations.deleteOrder(id);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}