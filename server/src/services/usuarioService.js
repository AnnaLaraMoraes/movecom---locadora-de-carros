const db = require('../models')

const index = () => {
    return db.usuario.findAll({order: ['nome']})
} 

const store = async (data) => {
    let dadosUsuario = {
        telefone: data.telefone,
        email:data.email,
        senha:data.senha,
        identidade:data.identidade,
        nome:data.nome,
        razao_social:data.razao_social,
        cpf:data.cpf,
        cnpj:data.cnpj,
        tipo_pessoa:data.tipo_pessoa
    }
    let usuario = await db.usuario.create(dadosUsuario)
    if(usuario){
        let dadosEndereco = {
            logradouro:data.logradouro,
            numero:data.numero,
            complemento:data.complemento,
            bairro:data.bairro,
            cidade:data.cidade,
            estado:data.estado,
            cep:data.cep,
            fk_id_usuario:usuario.id_usuario,
        }
        await db.endereco.create(dadosEndereco)
    }

    return usuario
}

const show = (idUsuario) => {
    return db.usuario.findOne({where: {id_usuario: idUsuario}})
}

const update = async (idUsuario, data) => {
    let dadosUsuario = {
        telefone: data.telefone,
        email:data.email,
        senha:data.senha,
        identidade:data.identidade,
        nome:data.nome,
        razao_social:data.razao_social,
        cpf:data.cpf,
        cnpj:data.cnpj,
        tipo_pessoa:data.tipo_pessoa
    }
    let usuario = db.usuario.update(dadosUsuario, {where: {id_usuario: idUsuario}})
    if(usuario){
        let dadosEndereco = {
            logradouro:data.logradouro,
            numero:data.numero,
            complemento:data.complemento,
            bairro:data.bairro,
            cidade:data.cidade,
            estado:data.estado,
            cep:data.cep
        }
        await db.endereco.update(dadosEndereco, {where: {fk_id_usuario: idUsuario}})
    }
    return usuario
}

const destroy = async (idUsuario) => {
    await db.endereco.destroy({where: {fk_id_usuario: idUsuario}})
    return db.usuario.destroy({where: {id_usuario: idUsuario}})
}

const login = (dados) => {
    return db.usuario.findOne({where: {email: dados.email, senha: dados.senha}})
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
    login
}

