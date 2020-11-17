const operations = require('../operation/cashier');//import all modules from ../operations/cashier.js 

//Add new cashier
exports.addCashier = async (req, res) => {
    try{
        const { title, gender } = req.body;
        const response = await operations.addCashier(title, gender); //Send data to database

        res.status(200).send({success: true, data: response}); //response if successful
    }catch(err){
        res.status(400).send({success: false, error: err});//response if failed
    }
} 

//Get single cashier
exports.getCashier = async (req, res) => {
    try{
        const {id} = req.params; //capture cashier for parameter
        const response = await operations.getCashier(id); //fetch cashier details

        res.status(200).send({success: true, data: response});//response if successful
    }catch(err){
        res.status(400).send({success: false, error: err});//response if failed
    }
}

//Get all cashier 
exports.getCashiers = async (req, res) => { 
    try{   
        const response = await operations.getCashiers(); //fetch cashoiers details

        res.status(200).send({success: true, data: response});//response if successful
    }catch(err){
        res.status(400).send({success: false, error: err});//response if failed
    }
}