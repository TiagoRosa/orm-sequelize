'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Tiago Rosa',
        ativo: true,
        email: 'tiago.rosa@teste.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Josiane Rosa',
        ativo: true,
        email: 'josi.rosa@teste.com.br',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pessoas', null, {});    
  }
};
