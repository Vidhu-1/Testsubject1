const product =require("./models/product")
const properties =require("./models/properties")
const categories= require("./models/categories")
const db =require("./connector")
const manufacture=require("./models/manufacture")

product.hasOne(properties);
product.belongsTo(categories)

product.belongsToMany(manufacture,{
    through:"product_manufactures",
    foreignKey:"product_id",
    otherKey: "manufacture_id",
    timestamp:"false"
})

manufacture.belongsToMany(product,{
    through:"product_manufactures",
    foreignKey:"manufacture_id",
    otherKey: "product_id",
    timestamp:"false"
})

db.sync()