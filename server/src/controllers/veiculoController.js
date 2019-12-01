const veiculoService = require('../services/veiculoService');

const index = (req, res) => {  
  veiculoService.index().then( veiculos => {
    return res.status(200).send(veiculos)
  }).catch(error => res.status(500).send("erro"));
}

const store = (req, res) => {  
  let data = req.body
  veiculoService.store(data).then( veiculos => {
    return res.status(200).send(veiculos)
  }).catch(error => res.status(500).send(error));
}

const show = (req, res) => {  
  let idVeiculo =req.params.idVeiculo
  veiculoService.show(idVeiculo).then( veiculos => {
    return res.status(200).send(veiculos)
  }).catch(error => res.status(500).send("erro"));
}

const update = (req, res) => {  
  let idVeiculo =req.params.idVeiculo
  let data = req.body
  veiculoService.update(idVeiculo, data).then( veiculos => {
    return res.status(200).send(veiculos)
  }).catch(error => res.status(500).send("erro"));
}

const destroy = (req, res) => {  
  let idVeiculo =req.params.idVeiculo
  veiculoService.destroy(idVeiculo).then( veiculos => {
    return res.status(200)
  }).catch(error => res.status(500).send(error));
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}
