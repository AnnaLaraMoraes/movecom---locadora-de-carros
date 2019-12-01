module.exports = (sequelize, DataTypes) => {
    const veiculo = sequelize.define('veiculo', {
        id_veiculo: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        placa: {
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
        fk_id_modelo: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'modelo', 
            key: 'id_modelo', 
          }
        },
        chassi: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        renavn: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        fk_id_categoria:{
          type: DataTypes.INTEGER,
          references: {
            model: 'categoria', 
            key: 'id_categoria', 
          }
        },
        preco_compra:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        preco_venda:{
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        },
        numero_passageiros:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        ano_fabricacao:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        tipo_combustivel:{
          type: DataTypes.ENUM('Gasolina', 'Etanol', 'Diesel', 'GNV', 'Flex'),
          allowNull: false,
        },
        potencia:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        capacidade_porta_malas:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        situcao:{
          type: DataTypes.ENUM('Locado', 'Vendido', 'Disponivel', 'Conserto'),
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

    return veiculo;
  }