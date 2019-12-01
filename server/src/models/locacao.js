module.exports = (sequelize, DataTypes) => {
    const locacao = sequelize.define('locacao', {
        id_locacao: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        fk_id_veiculo: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'veiculo', 
            key: 'id_veiculo', 
          }
        },
        fk_id_usuario: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'usuario', 
            key: 'id_usuario', 
          }
        },
        fk_id_motorista: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'motorista', 
            key: 'id_motorista', 
          }
        },
        data_retirada: {
          allowNull: false,
          type: DataTypes.DATE
        },
        data_devolucao: {
          allowNull: false,
          type: DataTypes.DATE
        },
        km_inicial:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        km_final:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        valor_locacao:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        valor_caucao:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        valor_segura:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        valor_pagamento_total:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        potencia:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
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

    return locacao;
}