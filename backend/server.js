const express = require("express");
const fileUpload= require("express-fileupload");
const app=express();
const db=require("./models");
const cors=require("cors");
const passport = require('passport');

//const Utilisateur=require("./models/Utilisateur");
const routes=require("./routes/app");
const PORT = process.env.PORT || 3000;

//init passport 
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(express.urlencoded({extended : true}));
//to make express aware of bodies
app.use(express.json());
//
app.use(cors());

//
//app.use(fileUpload());
app.use('/public', express.static('public'));
db.sequelize.sync().then((result)=>{
    //  console.log(result);
}).then((result)=>{
     //db.Utilisateur.create({Nom: "Ghouichat", Prenom: "Mouad", Email:"mouad@gmail.com", Mdp:"12345"});
    console.log(db.Utilisateur);
}).catch((err)=>{
    console.log(err);
});

app.use("/api",routes);
//error handling
app.use((err,req,res,next)=>{
    const status=err.status||500;
    return res.status(status).send({message: err.message});
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