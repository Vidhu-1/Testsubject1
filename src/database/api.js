const express=require("express")
const product =require("./models/product")
const Manufacture=require("./models/manufacture")

const router =express.Router();

router.get("/",(req,res)=> {
    product.findAll({
        include: [{model: Manufacture}]
    }).then(res1 => {
        res.json(res1);
    });
});

router.post("/",(req,res) => {
    if(req.body!== null) 
    {
        console.log(req.body);
        let newPdt = {
            name:req.body.name,
            price:req.body.price
        };
        let newManu = req.body.Manufacture;
        product.create(newPdt).then(pdt => {
            Manufacture.findOne({where: { id: newManu}}).then(resManu => {
                pdt.setManufacture(resManu);
                console.log("saved");
            });
            
            
        });
    }    
    res.json({status : "executed"});
           
});
router.post("/manufacture",(req,res) => {
    if(req.body!== null) 
    {
        console.log(req.body);
        let newMan = {
            name:req.body.name,
           
        };
        Manufacture.create(newMan).then(man =>{})
    }    
    res.json({status : "executed"});
           
});
module.exports=router;