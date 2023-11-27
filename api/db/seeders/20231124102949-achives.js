/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Achieves",
      [
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve1-PhotoRoom.png-PhotoRoom.png",
        },
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve2-PhotoRoom.png-PhotoRoom.png",
        },
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve3-PhotoRoom.png-PhotoRoom.png",
        },
        {
          description: 'Peace, door, boll',
          img: '/images/fichi/achieve4-PhotoRoom.png-PhotoRoom.png',
        },
        {
          description: 'Стииииилъ',
          img: '/images/fichi/achieve5-PhotoRoom.png-PhotoRoom.png',
        },
        {
          description: 'Стииииилъ',
          img: '/images/fichi/achieve6-PhotoRoom.png-PhotoRoom.png',
        },
        {
          description: 'Стииииилъ',
          img: '/images/fichi/achieve7-PhotoRoom.png-PhotoRoom.png',
        },
        {
          description: 'Стииииилъ',
          img: '/images/fichi/achieve8-PhotoRoom.png-PhotoRoom.png',
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
