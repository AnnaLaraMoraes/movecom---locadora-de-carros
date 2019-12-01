const categoriaService = require('../Services/categoriaService');

const index = (req, res) => {  
    categoriaService.index().then( categoria => {
      return res.status(200).send(categoria)
    }).catch(error => res.status(500).send("erro"));
}

  module.exports = {
    index
  }