/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, ) {
    await queryInterface.bulkInsert(
      "Achieves",
      [
        {
          description: '"Бронзовая медаль".',
          img: "/images/fichi/achieve1-PhotoRoom.png-PhotoRoom.png",
          longText:
            "Бронзовая медаль за выполнение некоторого количества заданий.",
        },
        {
          description: '"Серебряная медаль".',
          img: "/images/fichi/achieve2-PhotoRoom.png-PhotoRoom.png",
          longText:
            "Серебряная медаль за выполнение большого количества заданий.",
        },
        {
          description: '"Золотая медаль".',
          img: "/images/fichi/achieve3-PhotoRoom.png-PhotoRoom.png",
          longText: "Золотая медаль за успешное выполнение всех заданий.",
        },
        {
          description: '"Peace, Door, Ball".',
          img: "/images/fichi/achieve4-PhotoRoom.png-PhotoRoom.png",
          longText:
            "За Мир, Дверь, Мяч!",
        },
        {
          description: '"Командный игрок".',
          img: "/images/fichi/achieve5-PhotoRoom.png-PhotoRoom.png",
          longText:
            "Знак отличия 'Командный игрок' за успешное прохождение заданий в команде.",
        },
        {
          description: '"Эксперт".',
          img: "/images/fichi/achieve6-PhotoRoom.png-PhotoRoom.png",
          longText: "Знак отличия 'Эксперт' за прохождение сложных заданий.",
        },
        {
          description: '"Творческий размышляющий".',
          img: "/images/fichi/achieve7-PhotoRoom.png-PhotoRoom.png",
          longText:
            "Знак отличия 'Творческий размышляющий' за оригинальные решения заданий.",
        },
        {
          description: '"Стремительный".',
          img: "/images/fichi/achieve8-PhotoRoom.png-PhotoRoom.png",
          longText:
            "Знак отличия 'Стремительный' за быстрое и эйффективное прохождение заданий.",
        },
      ],
      {}
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
