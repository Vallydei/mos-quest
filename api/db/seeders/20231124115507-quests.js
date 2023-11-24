/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quests',
      [
        {
          title: 'Я сказал своей жене: Дорогая, я перезвоню тебе через 5 минут. Это было два года назад. Она до сих пор ждет этот звонок!',
          achivId: 1,
        },
        {
          title: 'На гик-тусовке два программиста встречаются. Один спрашивает: Как ты оказался здесь? Второй отвечает: Пришел по приглашению 127.0.0.1.',
          achivId: 2,
        },
        {
          title: 'Культурный отдых - это когда ты берешь книгу с собой в отпуск и фотографируешь ее на фоне всех достопримечательностей, чтобы потом читать ее дома.',
          achivId: 3,
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
