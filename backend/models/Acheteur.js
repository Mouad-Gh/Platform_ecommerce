const db= require('../models');
module.exports= (sequelize,DataTypes)=>{
    const Acheteur= sequelize.define('Acheteur',{

    },{
        classMethods: {
            associate: function(models) {
                this.belongsTo(db.Utilisateur);
                
            }
        }
    });
    
    return Acheteur;
};