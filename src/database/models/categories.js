const db = require('../connector');
const sequelize = require('sequelize');

const categories = db.define(
    "categories",
    {
        "name": {
            type : sequelize.STRING }
        
    }
);
module.exports=categories;