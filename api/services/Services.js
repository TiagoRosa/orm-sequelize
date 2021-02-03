const database = require('../models')

class Services{
  constructor(nomeDoModelo){
    this.nomeDoModelo = nomeDoModelo
  }

  async pegaTodosOsRegistros(where={}){
    return database[this.nomeDoModelo].findAll({where:{...where}})
  }

  async pegaUmRegistro(where={}){
    return database[this.nomeDoModelo].findOne({where:{...where}})
  }

  async criaRegistro(dados){
    return database[this.nomeDoModelo].create(dados)
  }

  async atualizaRegistro(dados,where,transacao={}){
    return database[this.nomeDoModelo]
      .update(dados, {where:{...where}},transacao)
  }
  
  async atualizaRegistros(dados,where,transacao={}){
    return database[this.nomeDoModelo]
      .update(dados, {where:{...where}},transacao)
  }
  
  async apagaRegistro(id){
    database[this.nomeDoModelo].destroy({where:{id}})
  }

  async restauraRegistro(id){
    database[this.nomeDoModelo].restore({where:{id}})
  }
}

module.exports = Services