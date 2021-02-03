const database = require('../models')
const Services = require('./Services')

class MatriculasServices extends Services{
  constructor(){
    super('Matriculas')
  }
  async pegaUmRegistro(where={}){
    return database[this.nomeDoModelo].findOne(
      { where:{...where}, 
        include: {model:database.Pessoas},
        include: {
          model: database.Turmas,
          attributes: ['data_inicio'],
          include: {
            model: database.Niveis,
            attributes: ['descr_nivel']
          }
        }
      })      
  }
}

/*Colaborador.findOne({
  attributes: ['colaboradorId', 'nome'],
  include: [
      {
          model: Cargo,
          attributes: ['nome']
      },
      {
          model: Setor,
          attributes: ['nome']
      }
  ],
  where: {
      setorId: req.user.setorId,
      matricula: matriculaId
  }
});*/

module.exports = MatriculasServices