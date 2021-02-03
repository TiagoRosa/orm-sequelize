const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criarPessoa)
  .put('/pessoas/:id', PessoaController.atualizarPessoa)
  .delete('/pessoas/:id', PessoaController.deletarPessoa)
  .post('/pessoas/:id/restaura',PessoaController.restauraPessoa)
  // matriculas
  /*.get('/pessoas/:estudanteId/matricula/',PessoaController.pegarMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegarMatriculasPorTurma)
  .get('/pessoas/matricula/lotadas', PessoaController.pegarTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula',PessoaController.criarMatricula)
  .post('/pessoas/:estudanteId/cancela',PessoaController.cancelarPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.atualizarMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.deletarMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)*/
 

module.exports = router
