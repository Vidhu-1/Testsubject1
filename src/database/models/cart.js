const db = require('../connector');
const sequelize = require('sequelize');

const cart =db.define(

    "cart",
    {
       "count":{
            type: sequelize.INTEGER
        },

    }
)
module.exports=cart;