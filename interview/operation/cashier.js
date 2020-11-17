const CashierModel = require('../models/cashier.model'); //imprt all DB module for Cashier schema from ../models/cashier.model.js

const addCashier = (title, gender) => {
    return new Promise((resolve, reject) => {
        const params = {
            title,
            gender
        }
        let cashier = new CashierModel.Cashier(params);
        try{
            resolve(cashier.save());
        }catch(e){
            reject(e)
        }
    });
}

const getCashier = (id) => {
    return new Promise((resolve, reject) => {
        try{
            CashierModel.Cashier.findById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

const getCashiers = () => {
    return new Promise((resolve, reject) => {
        try{
            CashierModel.Cashier.find((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

module.exports = { addCashier, getCashier, getCashiers };