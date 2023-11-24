/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          userId: 1,
          locationId: 1,
          text: "Лера делает не так!",
        },
        {
          userId: 2,
          locationId: 1,
          text: "Лера делает на много лучше!",
        },
        {
          userId: 2,
          locationId: 1,
          text: "Лера шикарная женщина(Маша)! (Изменить на Машу)",
        },
        {
          userId: 1,
          locationId: 1,
          text: "Никита котик!(злодейский)",
        },
        {
          userId: 1,
          locationId: 1,
          text: "Го тусить в пятницу!",
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
