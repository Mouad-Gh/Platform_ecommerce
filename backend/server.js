const express = require("express");
const app=express();
const db=require("./models");

//const Utilisateur=require("./models/Utilisateur");
const routes=require("./routes/app");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
//to make express aware of bodies
app.use(express.json());

db.sequelize.sync({force: true}).then((result)=>{
    //  console.log(result);
}).then((result)=>{
     db.Utilisateur.create({Nom: "Ghouichat", Prenom: "Mouad", Email:"mouad@gmail.com", Mdp:"12345"});
    console.log(db.Utilisateur);
}).catch((err)=>{
    console.log(err);
});

app.use("/api",routes);
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