/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          locationId: 1,
          locationImg:
            'https://static.dailymoscow.ru/storage/uploads/ufa/2016/03/BikxHKIqNv4-1.jpg',
        },
        {
          locationId: 1,
          locationImg:
            'https://restorateru.storage.yandexcloud.net/iblock/518/photo_1027_67323_3.jpg',
        },
        {
          locationId: 1,
          locationImg:
            'https://p2.zoon.ru/preview/IQaBiN_HU1HXI29Mmz8SBw/640x365x85/1/9/1/original_5444eab440c088f57a8b4843_5bd70bd8b242c.jpg',
        },
        {
          locationId: 1,
          locationImg:
            'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/5976/3936/large_989qdreuRH4.jpg',
        },
        {
          locationId: 1,
          locationImg:
            'https://mos-holidays.ru/wp-content/uploads/2015/10/Honey-Ill-call-back2.jpg',
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
