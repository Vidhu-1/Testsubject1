const db = require('../connector');
const sequelize = require('sequelize');

const product = db.define(
    "product",
    {
        "name": {
            type : sequelize.STRING
        },
        "price": {
            type : sequelize.DOUBLE
        }
    }
);
module.exports=product;