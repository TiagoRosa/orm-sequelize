const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')
const matriculas = require('./matriculasRoute')

module.exports = app =>{
  app.use(bodyParser.json())
  
  app.use(pessoas,niveis,turmas,matriculas)

}