const db = require('../connector');
const sequelize = require('sequelize');

const properties = db.define(
    "properties",
    {
        "color": {
            type : sequelize.STRING
        },
        "weight": {
            type : sequelize.DOUBLE
        }
    }
);
module.exports=properties;