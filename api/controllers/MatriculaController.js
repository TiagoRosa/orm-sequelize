const {MatriculasServices} = require('../services')
const matriculasServices = new MatriculasServices()

class MatriculaController{
  static async pegaUmaMatricula(req,res){
    try {
      const {estudanteId,matriculaId} = req.params
      const umaMatricula = await matriculasServices.pegaUmRegistro({
        id: matriculaId,
        estudante_id: Number(estudanteId)          
      })      
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async criarMatricula(req,res){
    try {
      const {estudanteId} = req.params
      const novaMatricula = {
        ...req.body, 
        estudante_id:Number(estudanteId)
      }
      const novaMatriculaCriada = await matriculasServices.criaRegistro(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async atualizarMatricula(req,res){
    try {
      const {estudanteId,matriculaId} = req.params
      const novasInfo = req.body
      await matriculasServices.atualizaRegistro(novasInfo,{
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      })      
      const matriculaAlterada = await matriculasServices.pegaUmRegistro({
        id: matriculaId,
        estudante_id: Number(estudanteId)          
      })      
      return res.status(200).json(matriculaAlterada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async deletarMatricula(req,res){
    try {
      const {estudanteId,matriculaId} = req.params
      await database.Matriculas.destroy({
        where:{
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({mensagem:`A matricula ${matriculaId} foi deletada com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async restaurarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: `id ${matriculaId} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async pegarMatriculas(req,res){
    try {
      const {estudanteId} = req.params
      const pessoa = await database.Pessoas.findOne({
        where:{
          id: Number(estudanteId)
        }
      })
      const matriculas = await pessoa.getAulasMatriculadas()
      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  static async pegarMatriculasPorTurma(req,res){
    try {
      const {turmaId} = req.params
      const todasAsMatriculas = await database.Matriculas.findAndCountAll({
        where:{
          turma_id: Number(turmaId),
          status: 'confirmado'
        },
        limit: 20,
        order: [['estudante_id','DESC']]
      })
      return res.status(200).json(todasAsMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  } 
}

module.exports = MatriculaController
