const {Router} = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
  // matriculas
  .get('/pessoas/:estudanteId/matricula/:matriculaId',MatriculaController.  pegaUmaMatricula)
  .post('/pessoas/:estudanteId/matricula',MatriculaController.criarMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId',MatriculaController.atualizarMatricula)
  /*.get('/pessoas/:estudanteId/matricula/',PessoaController.pegarMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegarMatriculasPorTurma)
  .get('/pessoas/matricula/lotadas', PessoaController.pegarTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula',PessoaController.criarMatricula)
  .post('/pessoas/:estudanteId/cancela',PessoaController.cancelarPessoa)
  
  .delete('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.deletarMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)*/
 

module.exports = router
