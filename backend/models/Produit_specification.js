
module.exports= (sequelize,DataTypes)=>{
    const Produit_specification= sequelize.define('Produit_specification',{
        nom: {
            type: DataTypes.STRING,
            allowNull: false
          },
        valeur: {
          type: DataTypes.STRING,
          allowNull: false
        }
    });

    Produit_specification.associate= models =>{
      
        //chaque Produit_specification appartient a un Produit
        Produit_specification.belongsTo(models.Produit);
    
    };


    return Produit_specification;
};