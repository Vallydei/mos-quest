/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Achieves",
      [
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve1-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут Dfcz?",
        },
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve2-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут dfb?",
        },
        {
          description: "who you gonna call",
          img: "/images/fichi/achieve3-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут ghnghn?",
        },
        {
          description: "Peace, door, boll",
          img: "/images/fichi/achieve4-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут 4?",
        },
        {
          description: "Стииииилъ",
          img: "/images/fichi/achieve5-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут 5?",
        },
        {
          description: "Стииииилъ",
          img: "/images/fichi/achieve6-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут 6?",
        },
        {
          description: "Стииииилъ",
          img: "/images/fichi/achieve7-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут 7?",
        },
        {
          description: "Стииииилъ",
          img: "/images/fichi/achieve8-PhotoRoom.png-PhotoRoom.png",
          longText: "Как вас зовут 8?",
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
