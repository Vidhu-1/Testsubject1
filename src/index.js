const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/connector");
const router =require("./database/api")
const app = express();
const port = 3000;
app.use("/",router)
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('Welcome');
});
app.post('/',(req,res) => {
    console.log(req.body); 
    res.json({status:"executed"});
});

db.authenticate().then(() => {
    console.log("db authenticated");
    require("./database/schemainitializer")
}).catch((err) => {
    console.error(err);
});


app.listen(port, () => {console.log(`server running on ${port}`)});

//callback