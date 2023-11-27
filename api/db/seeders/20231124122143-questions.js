/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          title: 'Поменяй текст заголовка вопроса, ирод!',
          question: 'И вопрос тоже поменяй!',
          answer: '1',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Ну ты ошалел?',
          question: 'И вопрос тот же(',
          answer: '2',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Еще один типа вопрос?',
          question: 'Ответ 3',
          answer: '3',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'Еще один О_О?',
          question: 'Ответ 1',
          answer: '4',
          questId: 1,
          locationId: 1,
        },
        {
          title: 'ПАМАГИТИ!',
          question: 'Ответ 1',
          answer: '5',
          questId: 1,
          locationId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
