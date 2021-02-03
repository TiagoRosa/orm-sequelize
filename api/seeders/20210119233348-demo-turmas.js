'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Turmas',
    [
      {
        data_inicio: '2020-02-01',
        nivel_id: 1,
        docente_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2020-02-10',
        nivel_id: 2,
        docente_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2020-02-20',
        nivel_id: 3,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

