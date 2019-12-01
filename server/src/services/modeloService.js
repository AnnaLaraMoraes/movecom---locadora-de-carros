const db = require('../models')

const index = () => {
    return db.modelo.findAll({order: ['nome']})
} 

const store = (data) => {
    return db.modelo.create(data)
}

const show = (idModelo) => {
    return db.modelo.findOne({where: {id_modelo: idModelo}})
}

const update = (idModelo, data) => {
    return db.modelo.update(data, {where: {id_modelo: idModelo}})
}

const destroy = (idModelo) => {
    return db.modelo.destroy({where: {id_modelo: idModelo}})
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}

