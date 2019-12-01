module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('modelo', {
      id_modelo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fk_id_marca: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'marca', 
          key: 'id_marca', 
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
    })
  ])
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('modelo');
  }
};