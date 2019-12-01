const db = require('../models')

const index = () => {
    return db.veiculo.findAll({order: ['placa']})
} 

const store = async (data) => {
    let dadosVeiculo = {
        placa: data.placa,
        fk_id_marca:data.fk_id_marca,
        fk_id_modelo:data.fk_id_modelo,
        chassi:data.chassi,
        renavn:data.renavn,
        fk_id_categoria:data.fk_id_categoria,
        preco_compra:data.preco_compra,
        preco_venda:data.preco_venda,
        numero_passageiros:data.numero_passageiros,
        ano_fabricacao: data.ano_fabricacao,
        tipo_combustivel:data.tipo_combustivel,
        potencia:data.potencia,
        capacidade_porta_malas:data.capacidade_porta_malas,
        situcao:data.situcao
    }
    return await db.veiculo.create(dadosVeiculo)
}

const show = (idVeiculo) => {
    return db.veiculo.findOne({where: {id_veiculo: idVeiculo}})
}

const update = async (idVeiculo, data) => {
    let dadosVeiculo = {
        placa: data.placa,
        fk_id_marca:data.fk_id_marca,
        fk_id_modelo:data.fk_id_modelo,
        chassi:data.chassi,
        renavn:data.renavn,
        fk_id_categoria:data.fk_id_categoria,
        preco_compra:data.preco_compra,
        preco_venda:data.preco_venda,
        numero_passageiros:data.numero_passageiros,
        ano_fabricacao: data.ano_fabricacao,
        tipo_combustivel:data.tipo_combustivel,
        potencia:data.potencia,
        capacidade_porta_malas:data.capacidade_porta_malas,
        situcao:data.situcao
    }
    return db.veiculo.update(dadosVeiculo, {where: {id_veiculo: idVeiculo}})
}

const destroy = async (idVeiculo) => {
    return db.veiculo.destroy({where: {id_veiculo: idVeiculo}})
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}

