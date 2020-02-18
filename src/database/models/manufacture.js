const db = require('../connector');
const sequelize = require('sequelize');

const manufacture = db.define(
    "manufacture",
    {
        "name": {
            type : sequelize.STRING
        },
        
    }
);
module.exports=manufacture;