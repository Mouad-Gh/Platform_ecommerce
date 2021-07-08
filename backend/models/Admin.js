
module.exports= (sequelize,DataTypes)=>{
    const Admin= sequelize.define('Admin',{

    });
    
    Admin.associate= models =>{

        //Admin est un Utilisateur
        Admin.belongsTo(models.Utilisateur);
        
    };

    return Admin;
};