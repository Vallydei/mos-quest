/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          locationId: 1,
          locationImg:
            "https://static.dailymoscow.ru/storage/uploads/ufa/2016/03/BikxHKIqNv4-1.jpg",
        },
        {
          locationId: 1,
          locationImg:
            "https://restorateru.storage.yandexcloud.net/iblock/518/photo_1027_67323_3.jpg",
        },
        {
          locationId: 1,
          locationImg:
            "https://p2.zoon.ru/preview/IQaBiN_HU1HXI29Mmz8SBw/640x365x85/1/9/1/original_5444eab440c088f57a8b4843_5bd70bd8b242c.jpg",
        },
        {
          locationId: 1,
          locationImg:
            "https://a-a-ah-ru.s3.amazonaws.com/uploads/items/5976/3936/large_989qdreuRH4.jpg",
        },
        {
          locationId: 1,
          locationImg:
            "https://mos-holidays.ru/wp-content/uploads/2015/10/Honey-Ill-call-back2.jpg",
        },
        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_1.png",
        },
        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_2.png",
        },
        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_3.png",
        },
        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_4.png",
        },
        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_5.png",
        },

        {
          locationId: 2,
          locationImg: "/images/ShrodingersCat/shrodinger2.jpg",
        },
        {
          locationId: 2,
          locationImg: "/images/ShrodingersCat/shrodinger3.jpg",
        },
        {
          locationId: 3,
          locationImg: "/images/CulturaQ/Галерея Люди-легенды_1.png",
        },
        {
          locationId: 3,
          locationImg: "/images/CulturaQ/Вход в музей Дом Бурганова_2.png",
        },
        {
          locationId: 2,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_3.png",
        },
        {
          locationId: 2,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_4.png",
        },
        {
          locationId: 2,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_5.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_1.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_2.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_3.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_4.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_10.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_6.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_7.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_9.png",
        },
        {
          locationId: 4,
          locationImg: "/images/CosmoHomyack/kosmo-homyak_slide_5.png",
        },
        
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_kitchen_4.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_kitchen_7.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_kitchen_8.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_kitchen_9.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_5.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_1.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_2.png",
        },

        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_4.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_3.png",
        },
        {
          locationId: 5,
          locationImg:
            "/images/MyGranMa/moya-pyanaya-babushka-letit-v-singapur_slide_3.png",
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
