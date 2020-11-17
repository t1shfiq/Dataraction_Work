const operations = require('../operation/food');

exports.addFood = async (req, res) => {
    try{
        const { title, price, category}= req.body
        const response = await operations.addFoodMenu(title, price, category);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.getFoodMenu = async (req, res) => {
    try{
        const response = await operations.getFoodMenu();

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}

exports.removeFood = async (req, res) => {
    try{
        const {id} = req.params;    
        const response = await operations.removeFoodMenu(id);

        res.status(200).send({success: true, data: response});
    }catch(err){
        res.status(400).send({success: false, error: err});
    }
}