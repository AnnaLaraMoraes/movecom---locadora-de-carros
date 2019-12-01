const db = require('../models')

const index = () => {
    return db.marca.findAll({order: ['nome']})
} 

const store = (data) => {
    return db.marca.create(data)
}

const show = (idMarca) => {
    return db.marca.findOne({where: {id_marca: idMarca}})
}

const update = (idMarca, data) => {
    return db.marca.update(data, {where: {id_marca: idMarca}})
}

const destroy = (idMarca) => {
    return db.marca.destroy({where: {id_marca: idMarca}})
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}

