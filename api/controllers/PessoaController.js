const {PessoasServices} = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController{

  static async pegaTodasAsPessoas(req,res){
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
      return res.status(200).json(todasAsPessoas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }    
  }

  static async pegaPessoasAtivas(req,res){
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
      return res.status(200).json(pessoasAtivas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }    
  }

  static async pegaUmaPessoa(req,res){
    try {
      const {id} = req.params
      const umaPessoa = await pessoasServices.pegaUmRegistro({id:Number(id)})
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarPessoa(req,res){
    try {
      const novaPessoa = req.body
      const novaPessoaCriada = pessoasServices.criaRegistro(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizarPessoa(req,res){
    try {
      const novasInfo = req.body
      const {id} = req.params
      await pessoasServices.atualizaRegistro(novasInfo,id)
      const pessoaAlterada = await pessoasServices.pegaUmRegistro({id:Number(id)})
      return res.status(200).json(pessoaAlterada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarPessoa(req,res){
    try {
      const {id} = req.params
      await pessoasServices.apagaRegistro(id)
      return res.status(200).json({mensagem:`O id ${id} foi deletado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraPessoa(req,res){
    try {
      const {id} = req.params
      await pessoasServices.restauraRegistro(id)
      return res.status(200).json({mensagem:`O id ${id} foi restaurado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //matriculas
  
  static async pegarTurmasLotadas(req,res){
    try {
      const lotacaoTurma = 2
      const turmasLotadas = await database.Matriculas.findAndCountAll({
        where:{
          status:'confirmado'
        },
        attributes:['turma_id'],
        group:['turma_id'],
        having: Sequelize.literal(`count(turma_id)>=${lotacaoTurma}`)
      })
      
      return res.status(200).json(turmasLotadas.count)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelarPessoa(req,res){
    try {
      const {estudanteId} = req.params
      await pessoasServices.cancelaPessoaEMatriculas(estudanteId)
      return res.status(200).json({mensagem:`matriculas refere ao estudante ${estudanteId} canceladas com sucesso`})  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}

module.exports = PessoaController
