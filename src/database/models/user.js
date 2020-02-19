const db =require("../connector")
const sequelizer =require("sequelize")

const user =db.define(

    "user",
    {
        "name" : {
            type : sequelizer.STRING
        },
        "password" :{
            type :sequelizer.STRING
        }
    }
)
module.exports=user;