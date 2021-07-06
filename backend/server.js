const express = require("express");
const app=express();
const db=require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

db.sequelize.sync({force: true}).then((result)=>{
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
*/