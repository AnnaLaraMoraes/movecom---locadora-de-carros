module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('motorista', {
      id_motorista: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      identidade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fk_id_cnh: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'cnh', 
          key: 'id_cnh', 
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
    return queryInterface.dropTable('motorista');
  }
};