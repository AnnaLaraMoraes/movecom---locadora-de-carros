module.exports = (sequelize, DataTypes) => {
    const categoria = sequelize.define('categoria', {
        id_categoria: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        valor_locacao: {
          allowNull: false,
          type: DataTypes.DECIMAL(10,2),
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

    return categoria;
}