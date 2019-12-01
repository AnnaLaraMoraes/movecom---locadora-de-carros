module.exports = (sequelize, DataTypes) => {
    const marca = sequelize.define('marca',{
        id_marca: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
          allowNull: false,
          type: DataTypes.STRING,
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          }
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        }
    });

    return marca;
}