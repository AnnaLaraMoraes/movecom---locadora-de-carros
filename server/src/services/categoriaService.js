const db = require('../models')

const index = () => {
    return db.categoria.findAll({order: ['nome']})
} 

module.exports = {
    index
}
