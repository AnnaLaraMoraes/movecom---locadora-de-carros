const db = require('../models')

const index = () => {
    return db.motorista.findAll({order: ['nome']})
} 

const store = async (data) => {
    let dadosCnh = {
        numero: data.numero,
        categoria: data.categoria,
        data_validade: data.data_validade,
        imagem: data.imagem
    }
    let cnh = await db.cnh.create(dadosCnh)
    if(cnh){
        let dadosMotorista = {
            nome: data.nome,
            identidade: data.identidade,
            telefone: data.telefone,
            email: data.email,
            fk_id_cnh: cnh.id_cnh
        }
        return db.motorista.create(dadosMotorista)
    }
}

const show = (idMotorista) => {
    return db.motorista.findOne({where: {id_motorista: idMotorista}})
}

const update = async (idMotorista, data) => {
    let dadosMotorista = {
        nome: data.nome,
        identidade: data.identidade,
        telefone: data.telefone,
        email: data.email
    }
    db.motorista.update(dadosMotorista, {where: {id_motorista: idMotorista}})
    let motorista = await db.motorista.findOne({where: {id_motorista: idMotorista}})
    if(motorista){
        let dadosCnh = {
            numero: data.numero,
            categoria: data.categoria,
            data_validade: data.data_validade,
            imagem: data.imagem
        }
        db.cnh.update(dadosCnh, {where: {id_cnh: motorista.fk_id_cnh}})
    }
    return motorista
}

const destroy = async (idMotorista) => {
    let motorista = await db.motorista.findOne({where: {id_motorista: idMotorista}})
    let id_cnh = motorista.fk_id_cnh
    db.motorista.destroy({where: {id_motorista: idMotorista}})
    return db.cnh.destroy({where: {id_cnh: id_cnh}})
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}

