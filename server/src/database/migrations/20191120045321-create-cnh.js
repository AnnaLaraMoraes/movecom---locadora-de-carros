module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('cnh', {
      id_cnh: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoria: {
        allowNull: false,
        type: DataTypes.ENUM('A', 'B', 'C', 'D', 'E'),
      },
      data_validade: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      imagem: {
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
    return queryInterface.dropTable('cnh');
  }
};