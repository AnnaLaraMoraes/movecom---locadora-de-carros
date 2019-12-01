const db = require('../models')

const index = () => {
    db.marca.findAll({order: ['nome']})
} 

module.exports = {
    index
}

