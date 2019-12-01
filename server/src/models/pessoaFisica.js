module.exports = (sequelize, DataTypes) => {
    const pessoaFisica = sequelize.define('pessoaFisica', {
        cpf: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        num_identidade: {
          allowNull: false,
          type: DataTypes.INTEGER,
          unique: true,
        },
        fk_id_usuario:{
          type: DataTypes.INTEGER,
          references: {
            model: 'usuario', 
            key: 'id_usuario', 
          }
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
    });

    return pessoaFisica;
  }