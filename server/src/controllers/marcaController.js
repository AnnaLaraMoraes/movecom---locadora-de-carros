const marcaService = require('../services/marcaService');

const index = (req, res) => {  
  marcaService.index().then( marcas => {
    return res.status(200).send(marcas)
  }).catch(error => res.status(500).send("erro"));
}

const store = (req, res) => {  
  let data = req.body
  marcaService.store(data).then( marcas => {
    return res.status(200).send(marcas)
  }).catch(error => res.status(500).send("erro"));
}

const show = (req, res) => {  
  let idMarca =req.params.idMarca
  marcaService.show(idMarca).then( marcas => {
    return res.status(200).send(marcas)
  }).catch(error => res.status(500).send("erro"));
}

const update = (req, res) => {  
  let idMarca =req.params.idMarca
  let data = req.body
  marcaService.update(idMarca, data).then( marcas => {
    return res.status(200).send(marcas)
  }).catch(error => res.status(500).send("erro"));
}

const destroy = (req, res) => {  
  let idMarca =req.params.idMarca
  marcaService.destroy(idMarca).then( marcas => {
    return res.status(200)
  }).catch(error => res.status(500).send("erro"));
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
