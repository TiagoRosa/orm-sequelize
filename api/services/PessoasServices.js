const database = require('../models')
const Services = require('./Services')

class PessoasServices extends Services{
  constructor(){
    super('Pessoas')
    this.matriculas = new Services('Matriculas')
  }
  //metodas especificos do controlador de pessoas
  async pegaRegistrosAtivos(where={}){
    return database[this.nomeDoModelo]
      .findAll({where :{...where}})
  }

  async pegaTodosOsRegistros(where={}){
    return database[this.nomeDoModelo]
      .scope('todos')
      .findAll({where:{...where}})
  }

  async cancelaPessoaEMatriculas(estudanteId){
    return database.sequelize.transaction(async transacao =>{
      await super.atualizaRegistro({ativo:false},estudanteId,{transaction:transacao})
      await this.matriculas.atualizaRegistros({status:'cancelado'},{estudante_id:estudanteId},{transaction:transacao})
    })
  }

}

module.exports = PessoasServices