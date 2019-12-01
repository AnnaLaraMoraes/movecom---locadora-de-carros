const modeloService = require('../services/modeloService');

const index = (req, res) => {  
  modeloService.index().then( modelos => {
    return res.status(200).send(modelos)
  }).catch(error => res.status(500).send("erro"));
}

const store = (req, res) => {  
  let data = req.body
  modeloService.store(data).then( modelos => {
    return res.status(200).send(modelos)
  }).catch(error => res.status(500).send(error));
}

const show = (req, res) => {  
  let idModelo =req.params.idModelo
  modeloService.show(idModelo).then( modelos => {
    return res.status(200).send(modelos)
  }).catch(error => res.status(500).send("erro"));
}

const update = (req, res) => {  
  let idModelo =req.params.idModelo
  let data = req.body
  modeloService.update(idModelo, data).then( modelos => {
    return res.status(200).send(modelos)
  }).catch(error => res.status(500).send("erro"));
}

const destroy = (req, res) => {  
  let idModelo =req.params.idModelo
  modeloService.destroy(idModelo).then( modelos => {
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
