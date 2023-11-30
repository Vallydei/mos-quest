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
          locationId: 2,
          locationImg: "/images/ShrodingersCat/shrodinger1.avif",
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
          locationId: 2,
          locationImg: "/images/ShrodingersCat/shrodinger4.jpg",
        },
        {
          locationId: 2,
          locationImg: "/images/ShrodingersCat/shrodinger5.jpg",
        },

        {
          locationId: 3,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_3.png",
        },
        {
          locationId: 3,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_4.png",
        },
        {
          locationId: 3,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_1.png",
        },
        {
          locationId: 3,
          locationImg: "/images/NeonMonkey/neon-monkey_slide_2.png",
        },
        {
          locationId: 3,
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
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_6.png",
        },

        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_7.png",
        },

        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_8.png",
        },

        {
          locationId: 6,
          locationImg: "/public/images/CulturaQ/musey-surrealizm_9.png",
        },
        {
          locationId: 7,
          locationImg: "/images/PythonConf/010.png",
        },
        {
          locationId: 7,
          locationImg: "/images/PythonConf/020.png",
        },
        {
          locationId: 7,
          locationImg: "/images/PythonConf/030.png",
        },
        {
          locationId: 7,
          locationImg: "/images/PythonConf/040.png",
        },
        {
          locationId: 7,
          locationImg: "/images/PythonConf/050.png",
        },
        {
          locationId: 8,
          locationImg: "/images/GeekPicknic/001.png",
        },
        {
          locationId: 8,
          locationImg: "/images/GeekPicknic/002.png",
        },
        {
          locationId: 8,
          locationImg: "/images/GeekPicknic/003.png",
        },
        {
          locationId: 8,
          locationImg: "/images/GeekPicknic/004.png",
        },
        {
          locationId: 8,
          locationImg: "/images/GeekPicknic/005.png",
        },
        {
          locationId: 9,
          locationImg: "/images/ArtPlay/101.png",
        },
        {
          locationId: 9,
          locationImg: "/images/ArtPlay/102.png",
        },
        {
          locationId: 9,
          locationImg: "/images/ArtPlay/103.png",
        },
        {
          locationId: 9,
          locationImg: "/images/ArtPlay/104.png",
        },
        {
          locationId: 9,

          locationImg: "/images/ArtPlay/105.png",
        },
        {
          locationId: 10,
          locationImg: "/images/Tokkpokki/06.png",
        },
        {
          locationId: 10,
          locationImg: "/images/Tokkpokki/05.png",
        },
        {
          locationId: 10,
          locationImg: "/images/Tokkpokki/04.png",
        },
        {
          locationId: 10,
          locationImg: "/images/Tokkpokki/02.png",
        },
        {
          locationId: 10,
          locationImg: "/images/Tokkpokki/01.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/1.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/2.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/3.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/4.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/5.png",
        },
        {
          locationId: 11,
          locationImg: "/images/ComicCon/6.png",
        },

        {
          locationId: 12,
          locationImg: "/images/Furry/0001.png",
        },
        {
          locationId: 12,
          locationImg: "/images/Furry/0002.png",
        },
        {
          locationId: 12,
          locationImg: "/images/Furry/0003.png",
        },
        {
          locationId: 12,
          locationImg: "/images/Furry/0004.png",
        },
        {
          locationId: 12,
          locationImg: "/images/Furry/0005.png",
        },
        {
          locationId: 12,
          locationImg: "/images/Furry/0005.png",
        },
        {
          locationId: 13,
          locationImg: "/images/maximGorkiiestate/20160910-113525-largejpg.jpg",
        },
        {
          locationId: 13,
          locationImg: "/images/maximGorkiiestate/caption(1).jpg",
        },
        {
          locationId: 13,
          locationImg:
            "images/maximGorkiiestate/gorky-s-house-ryabushinsky.jpg",
        },

        {
          locationId: 13,
          locationImg: "/images/maximGorkiiestate/gorky-s-house.jpg",
        },
        {
          locationId: 13,
          locationImg:
            "/images/maximGorkiiestate/gorky-s-house-ryabushinsky.jpg",
        },
        {
          locationId: 13,
          locationImg: "/images/maximGorkiiestate/soffitto-intarsiato.jpg",
        },
        {
          locationId: 14,
          locationImg: "/images/MikalBulgakovApartments/bulgakov_kvartira2.jpg",
        },
        {
          locationId: 14,
          locationImg: "/images/MikalBulgakovApartments/bulgakov_table.jpg",
        },
        {
          locationId: 14,
          locationImg: "/images/MikalBulgakovApartments/bulgakov_table.jpg",
        },
        {
          locationId: 14,
          locationImg: "/images/MikalBulgakovApartments/SYUCEkAsxD-A.jpg",
        },
        {
          locationId: 14,
          locationImg: "/images/MikalBulgakovApartments/bulgakov_kvartira1.jpg",
        },
        {
          locationId: 15,
          locationImg:
            "/images/cinemaFiveStars/1d729c8feeb8b5e8cb17a5559576eea7.jpg",
        },
        {
          locationId: 15,
          locationImg: "/images/cinemaFiveStars/95674.webp",
        },
        {
          locationId: 15,
          locationImg:
            "/images/cinemaFiveStars/ba0bc6881e1f41399bdec55fbe35.jpg",
        },
        {
          locationId: 15,
          locationImg:
            "/images/cinemaFiveStars/Depositphotos_82283940_xl_2015_2.jpg",
        },
        {
          locationId: 15,
          locationImg: "/images/cinemaFiveStars/4028.jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/caption (4).jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/caption.jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/caption(1).jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/caption(2).jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/photo3jpg.jpg",
        },
        {
          locationId: 16,
          locationImg: "/images/walkingInTheDark/caption(3).jpg",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__124822.png",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__124907.png",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__124937.png",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__125000.png",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__125017.png",
        },
        {
          locationId: 17,
          locationImg: "/images/litratureRestrant/__2019-03-28__124735.png",
        },
        {
          locationId: 18,
          locationImg: "client/public/images/uebar/IMG-133.jpg",
        },
        {
          locationId: 18,
          locationImg: "client/public/images/uebar/IMG-117.jpg",
        },
        {
          locationId: 18,
          locationImg: "client/public/images/uebar/IMG-109.jpg.jpg",
        },
        {
          locationId: 18,
          locationImg: "client/public/images/uebar/IMG-190.jpg",
        },
        {
          locationId: 18,
          locationImg: "client/public/images/uebar/IMG-150.jpg",
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
