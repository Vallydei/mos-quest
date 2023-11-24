/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Achieves",
      [
        {
          description: "who you gonna call",
          img: "https://i5.walmartimages.com/asr/9ca9b4c8-3376-4ce1-8f37-75ffb42030c6.7a7b7f031be163162ff93f1d832bda72.jpeg",
        },
        {
          description: "who you gonna call",
          img: "https://i5.walmartimages.com/asr/9ca9b4c8-3376-4ce1-8f37-75ffb42030c6.7a7b7f031be163162ff93f1d832bda72.jpeg",
        },
        {
          description: "who you gonna call",
          img: "https://i5.walmartimages.com/asr/9ca9b4c8-3376-4ce1-8f37-75ffb42030c6.7a7b7f031be163162ff93f1d832bda72.jpeg",
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
