module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('marca', {
      id_marca: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  ])
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('marca');
  }
};