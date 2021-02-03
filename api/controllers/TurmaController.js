//const database = require('../models/')
const Sequelize = require('sequelize')
const op = Sequelize.Op

const Services = require('../services/Services')
const turmasServices = new Services('Turmas')

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const where = {}
      const {data_inicial,data_final} = req.query
      data_inicial || data_final ? where.data_inicio = {} : null
      data_inicial ? where.data_inicio[op.gte] = data_inicial : null
      data_final ? where.data_inicio[op.lte] = data_final : null

      const todasAsTurmas = await turmasServices.pegaTodosOsRegistros(where)
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
 
  static async pegaUmaTurma(req,res){
    try {
      const {id} = req.params
      const umaTurma = await turmasServices.pegaUmRegistro({id: Number(id)})
      return res.status(200).json(umaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarTurma(req,res){
    try {
      const novaTurma = req.body
      const novaTurmaCriada = await turmasServices.criaRegistro(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizarTurma(req,res){
    try {
      const novasInfo = req.body
      const {id} = req.params
      await turmasServices.atualizaRegistro(novasInfo,id)
      const turmaAlterada = await turmasServices.pegaUmRegistro({id: Number(id)})
      return res.status(200).json(turmaAlterada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarTurma(req,res){
    try {
      const {id} = req.params
      await turmasServices.apagaRegistro(Number(id))
      return res.status(200).json({mensagem:`O id ${id} foi deletado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraTurma(req,res){
    try {
      const {id} = req.params
      await turmasServices.restauraRegistro(Number(id))
      return res.status(200).json({mensagem:`O id ${id} foi restaurado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController
