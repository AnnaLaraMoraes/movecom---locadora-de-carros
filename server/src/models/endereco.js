module.exports = (sequelize, DataTypes) => {
    const endereco = sequelize.define('endereco', {
        id_endereco: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        logradouro: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        numero: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        complemento: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        bairro: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        cidade: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        estado: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        cep: {
          allowNull: false,
          type: DataTypes.INTEGER,
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

    return endereco;
  }