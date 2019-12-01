module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('pessoaJuridica', {
      cnpj: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome_fantasia: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      razao_social: {
        allowNull: false,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('pessoaJuridica');
  }
};