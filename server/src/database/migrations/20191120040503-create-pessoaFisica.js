module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('pessoaFisica', {
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
    })
  ])
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('pessoaFisica');
  }
};