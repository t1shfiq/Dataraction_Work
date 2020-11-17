const FoodModel = require('../models/food.model');

const addFoodMenu = (title, price, category) => {
    return new Promise((resolve, reject) => {
        const params = {
            title,
            price,
            category
        }
        let menu = new FoodModel.FoodMenu(params);
        
        try{
            resolve(menu.save());
        }catch(e){
            reject(e)
        }
    });
}

const getFoodMenu = () => {
    return new Promise((resolve, reject) => {
        try{
            FoodModel.FoodMenu.find((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

const removeFoodMenu = (id) => {
    return new Promise((resolve, reject) => {
        try{
            FoodModel.FoodMenu.findByIdAndDelete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        }catch(e){
            reject(e)
        }
    });
}

module.exports = { addFoodMenu, getFoodMenu, removeFoodMenu };