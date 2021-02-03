const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {

  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req,res){
    try {
      const {id} = req.params
      const umNivel = await niveisServices.pegaUmRegistro({id:Number(id)})
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarNivel(req,res){
    try {
      const novoNivel = req.body
      const novoNivelCriado = await niveisServices.criaRegistro(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizarNivel(req,res){
    try {
      const novasInfo = req.body
      const {id} = req.params
      await niveisServices.atualizaRegistro(novasInfo,id)
      const nivelAlterado = await niveisServices.pegaUmRegistro({id:Number(id)})
      return res.status(200).json(nivelAlterado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarNivel(req,res){
    try {
      const {id} = req.params
      await niveisServices.apagaRegistro(id)
      return res.status(200).json({mensagem:`O id ${id} foi deletado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraNivel(req,res){
    try {
      const {id} = req.params
      await niveisServices.restauraRegistro(Number(id))
      return res.status(200).json({mensagem:`O id ${id} foi restaurado com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController