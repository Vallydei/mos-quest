/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          title: 'Дорогая, я перезвоню…',
          description: 'В баре Дорогая я перезвоню в ТЦ Пятницкий вы можете провести время за общением в компании или просто как следует отдохнуть после рабочего дня, в чём вам с удовольствием помогут наши опытные бармены и ассортимент алкоголя — мы приготовили напитки по вкусу и кошельку! Вам нужно только сообщить крепость и вкус (сладкий или горьковатый). Чтобы ваш бокал не пустовал, мы предлагаем большой выбор столовых и десертных вин из различных сортов винограда.',
          adress: 'Россия, Москва, Пятницкий переулок, 2, 2 этаж',
          map: 'https://image2.yell.ru/pr-cache/_5SmFqdi5jXn5ShFcjD60g==/,/H0_Ibn18YkUyqOMtkWZ9q88o8TDzFqAOmoUBtasZkBwaQi7sMxCXA8OIGM0yZRUyO0uRuWmh81_op4NTYqsJtWfv8LaEHG-pGAlRYes3Ul6WSoL8GDD5OIEZslUWg2onu41oShW4IA3S0CqagmwRmMvumwYVw5ck',
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
