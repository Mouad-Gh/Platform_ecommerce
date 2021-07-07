const express = require("express");
const app=express();
const db=require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

//Routes
app.use('/api/produits',require('./routes/produits.routes'));

db.sequelize.sync().then((result)=>{
    console.log(result);
});

app.listen(PORT,()=>{
    console.log(`listening on : http://localhost:${PORT}`);
});
/*
app.get('/',(req,res)=>{
    res.send('tst ');
})
app.listen(3000);
// {force: true} to drop tables and then create them
*/