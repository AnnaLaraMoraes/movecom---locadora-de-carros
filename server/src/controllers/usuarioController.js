const usuarioService = require('../Services/usuarioService');

const index = (req, res) => {  
  usuarioService.index().then( usuarios => {
    return res.status(200).send(usuarios)
  }).catch(error => res.status(500).send("erro"));
}

const store = (req, res) => {  
  let data = req.body
  usuarioService.store(data).then( usuarios => {
    return res.status(200).send(usuarios)
  }).catch(error => res.status(500).send("erro"));
}

const show = (req, res) => {  
  let idUsuario =req.params.idUsuario
  usuarioService.show(idUsuario).then( usuarios => {
    return res.status(200).send(usuarios)
  }).catch(error => res.status(500).send("erro"));
}

const update = (req, res) => {  
  let idUsuario =req.params.idUsuario
  let data = req.body
  usuarioService.update(idUsuario, data).then( usuarios => {
    return res.status(200).send(usuarios)
  }).catch(error => res.status(500).send("erro"));
}

const destroy = (req, res) => {  
  let idUsuario =req.params.idUsuario
  usuarioService.destroy(idUsuario).then( usuarios => {
    return res.status(200)
  }).catch(error => res.status(500).send(error));
}

const login = (req, res) => {  
  let data = req.body
  usuarioService.login(data).then( usuarios => {
    if(usuarios){
      return res.status(200).send(usuarios)
    }else{
      res.status(204).send(usuarios)
    }
  }).catch(error => res.status(500).send("erro"));
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
  login
}
