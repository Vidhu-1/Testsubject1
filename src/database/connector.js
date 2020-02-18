const sequelize = require('sequelize');
const config = require('../config/config');

const db = new sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host:config.db.host,
        dialect:"mysql",
        operatorsAliases: false,
        logging: config.db.logging,
        
      pool:{
          max:30,
          min: 0,
          acquire:30000,
          idle:10000
    }  
    }
);

module.exports = db;