const motoristaService = require('../services/motoristaService');

const index = (req, res) => {  
  motoristaService.index().then( motorista => {
    return res.status(200).send(motorista)
  }).catch(error => res.status(500).send("erro"));
}

const store = (req, res) => {  
  let data = req.body
  motoristaService.store(data).then( motorista => {
    return res.status(200).send(motorista)
  }).catch(error => res.status(500).send(error));
}

const show = (req, res) => {  
  let idMotorista =req.params.idMotorista
  motoristaService.show(idMotorista).then( motorista => {
    return res.status(200).send(motorista)
  }).catch(error => res.status(500).send("erro"));
}

const update = (req, res) => {  
  let idMotorista =req.params.idMotorista
  let data = req.body
  motoristaService.update(idMotorista, data).then( motorista => {
    return res.status(200).send(motorista)
  }).catch(error => res.status(500).send("erro"));
}

const destroy = (req, res) => {  
  let idMotorista =req.params.idMotorista
  motoristaService.destroy(idMotorista).then( motorista => {
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
