module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.all([queryInterface.createTable('usuario', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      identidade: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      razao_social: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      cnpj: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tipo_pessoa: {
        allowNull: false,
        type:DataTypes.ENUM('fisica', 'juridica'),
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
    return queryInterface.dropTable('usuario');
  }
};