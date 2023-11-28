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
        {
          title: 'Вопрос разработчикам и люителям технологий!',
          question: 'Какой известный ивент для разработчиков и стартаперов часто проходит в пространстве Digital October?',
          answer: 'Moscow Python Conf',
          questId: 2,
          locationId: 1,
        },
        {
          title: 'Гик Ивенты?',
          question: 'В каком месте Москвы обычно проводится фестиваль "Geek Picnic"?',
          answer: 'ВДНХ',
          questId: 2,
          locationId: 1,
        },
        {
          title: 'Вопрос для ценителей современного искусства и дизайна?',
          question: 'Назови одно из главных арт/дизайн пространств Москвы?',
          answer: 'Artplay',
          questId: 2,
          locationId: 1,
        },
        {
          title: 'Вопрос для любителей KPOP ',
          question: 'Самое лучшее заведение по тематике KPOP',
          answer: 'Кафе Tokpokki',
          questId: 2,
          locationId: 1,
        },
        {
          title: 'Вопрос любителям косплея!',
          question: 'Где проходит Comic Con в Москве ',
          answer: 'Крокус Сити Холл',
          questId: 2,
          locationId: 1,
        },
        {
          title: 'Любишь фурри Фэндом, ищешь место сходок и фестивалей? Ответь на следущий вопрос ',
          question: 'Как назыввется персонаж поклонника Фурри',
          answer: 'Фурсона',
          questId: 2,
          locationId: 1,
        }
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
