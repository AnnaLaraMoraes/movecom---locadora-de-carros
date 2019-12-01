const marcaService = require('../services/marcaService');

const index = (req, res) => {  
  console.log("teste")
  marcaService.index().then( marcas => {
    return res.status(200).send(marcas)
  }).catch(error => res.status(500).send("erro"));
}
module.exports = {
  index
}
