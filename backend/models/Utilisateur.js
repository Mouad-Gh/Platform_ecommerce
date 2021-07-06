module.exports = (sequelize,DataTypes)=>{
    const Utilisateur = sequelize.define('Utilisateur',{
        Nom: {
            type : DataTypes.STRING,
            allowNull: false
        },
        Prenom: {
            type : DataTypes.STRING,
            allowNull: false
        },
        sexe: {
            type : DataTypes.STRING
        },
        dateNaissance:{
            type: DataTypes.DATE
        },
        adress: {
            type : DataTypes.STRING
        }

    });
    return Utilisateur;
};