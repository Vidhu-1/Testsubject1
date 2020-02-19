const express = require("express")
const Product = require("./models/product")
const Manufacture = require("./models/manufacture")
const Category = require("./models/category")
const Properties = require("./models/properties")
const Cart = require("./models/cart")


const router =express.Router();


router.get('/',(req,res) => {
    Product.findAll({
        include: [{model:Manufacture}]
    }).then(res1 => {
        res.json(res1);
    });
});


//Product 
router.post("/add_product",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newPdt = {
             name:req.body.name,
             price:req.body.price
         };
        let newManu=req.body.Manufacture;
        let newCat =req.body.Category;
        Product.create(newPdt).then(pdt => { 

                Manufacture.findOne( {where: {id:newManu}}).then(resManu =>{
                        pdt.setManufactures(resManu);
                        console.log("saved");
                });   

                Category.findOne( {where: {id:newCat}}).then(resCat =>{
                        pdt.setManufactures(resCat);
                        console.log("saved");
                });

             }
    )}
    res.json({status:"executed"});      
});




//Manufacture
router.post("/add_manufacture",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newMan = {
            name:req.body.name,  
        };
        Manufacture.create(newMan).then(man => {
            console.log("Saved");
        })
    
        res.json({status:"executed"});  
        }
});

//Category
router.post("/add_category",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newCat = {
            name:req.body.name,  
        };
        Category.create(newCat).then(cat => {
        console.log("Saved");
    })
    
    res.json({status:"executed"});  
    }
    });

//Properties
router.post("/add_properties",(req,res) => {
    if(req.body !==null) {
        console.log(req.body); 
        let newProperty = {
         name:req.body.name,  
        };
        Properties.create(newProperty).then(pro => {
            console.log("Saved");
        })
    
        res.json({status:"executed"});  
        }
});
router.put('/cart', (request, response) => {

    if(request.body !== null){

        let uid = request.body.userId
        let pid = request.body.productId
        let newCart = {
            user_id: request.body.userId,
            product_id: request.body.productId,
            count: request.body.count
        }
        user.findOne({where: {id: uid}}).then(user_obj => {

            if (user_obj !== null){

                Product.findOne({where : {id : pid}}).then(product_obj => {

                    if(product_obj !== null){

                        cart.findOne({where : {user: user_obj, product: product_obj}}).then(cart_obj => {

                            if (cart_obj !== null){

                                cart.create(newCart, cc => {console.log('New Item added')
                                response.send({'status' : 'Done565'})
                            })
                            }
                            else{

                                currentCount = cart_obj.count
                                currentCount = currentCount + request.body.count
                                console.log(currentCount)
                                cartN = {
                                    user_id: request.body.userId,
                                    product_id: request.body.productId,
                                    count: currentCount
                                }                                
                                console.log(cartN)

                                cart.update(cartN).then(cc => {console.log('Item updated')
                                    response.send({'status' : 'Done'})
                                })
                            }
                            response.send({'status': 'Done'})
                        }).catch(err => {
                            cart.create(newCart)
                            .then( cc => {console.log('New Item added')})
                            .catch(err => {console.error('678578')});
                        response.send({'status' : 'Done'})
                    })
                    }
                }).catch(err => {console.log('Error : product not found')
                response.send({'status': 'Not Done'})})
            }
        }).catch(err => {console.log('Error : User not found')
        response.send({'status': 'Not Done'})})
    }
})
router.get('/', (request, response) => {

    Product.findOne({where :  {id: request.query["id"]}}).then(res1 => {response.json(res1)})
})

module.exports = router;

