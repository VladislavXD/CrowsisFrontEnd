import catalogImg1 from './../img/верхняя одежда.jpg'
import catalogImg2 from './../img/аксесуары.jpg'
import catalogImg3 from './../img/джемперы и кардиган.webp'
import catalogImg4 from './../img/джинсы.jpg'
import catalogImg5 from './../img/обувь.jpeg'
import catalogImg6 from './../img/пиджаки.jpg'
import catalogImg7 from './../img/рубашки.webp'
import catalogImg8 from './../img/толстовки.jpg'
import catalogImg9 from './../img/футболки и поло.jpg'
import catalogImg10 from './../img/шорты.webp'


const CatalogList = [
  {
    id: 1,
    img: catalogImg1,
    name: "Верхняя одежда",
    link: "/catalog/verkhyayaOdejda",
    categoris: [
      {
        ru: 'Все',
        en: 'all'
      },
      {
        ru: "Куртки", 
        en:'Jackets', 
      },
      {
        ru:  "Пальто", 
        en: 'Coats', 
      },
      {
        ru:  'Ветровки',
        en: 'Windbreakers',
      }
    ]
  },
  {
    id: 2,
    img: catalogImg5,
    name: "Обувь",
    link: "/catalog/obuv",
    categoris: [
      {
        ru: 'Все', 
        en: 'all', 
      },
      {
        ru: "Туфли",
        en: 'Shoes',
      },
      {
        ru: "Кросоовки",
        en: 'Sneakers',
      },
      {
        ru:  'Сапоги',
        en: 'Boots'
      }
    ] 

  },
  {
    id: 2,
    img: catalogImg9,
    name: "Футболки и поло",
    link: "/catalog/futbolki",
    categoris: [
      {
        ru: 'Все',
        en: 'all', 
      },
      {
        ru:  "Поло", 
        en: 'Polo',
      },
      {
        ru: "Футболки",
        en: 'T-shirts'
      }
    ]

  },
  {
    id: 2,
    img: catalogImg2,
    name: "Аксесуары",
    link: "/catalog/aksesuari",
    categoris: [
      {
        ru: 'Все',
        en: 'Everything',
      },
      {
        ru: 'Шарф',
        en: 'Accessories',
      },
      {
        ru: "Галстуки и бабочки",
        en:  'Ties and Bows',
      },
      {
        ru:  "Нижнее белье",
        en: 'Underwear',
      },
      {
        ru:  "Очки",
        en: 'Glasses'
      },
      {
        ru:  "Носки",
        en: 'Socks'
      }
    ]
  },
  {
    id: 2,
    img: catalogImg10,
    name: "Шорты",
    link: "/catalog/shorts",
    categoris: [
      {
        ru: 'Все',
        en: 'all',
      },
      {
        ru: "Шорты",
        en: 'Shorts',
      },
      {
        ru: "Шорты плавательные",
        en: 'Swimming shorts'
      }
    ]
  },
  {
    id: 2,
    img: catalogImg4,
    name: "Джинсы",
    link: "/catalog/djinsi",
    categoris: [
      {
        ru: 'Все',
        en: 'all',
      },
      {
        ru: "Джинсы",
        en: 'Jeans'
      }
    ]

  },
  {
    id: 3,
    img: catalogImg7,
    name: "Рубашки",
    link: "/catalog/rubashki",
    categoris: [
      {
        ru: 'Все',
        en: 'all',
      },
      {
        ru: "Рубашки",
        en: 'Shirts'
      }
    ]

  },
  {
    id: 4,
    img: catalogImg6,
    name: "Пиджаки",
    link: "/catalog/pidjaki",
    categoris: [
      {
        ru: 'Все', 
        en: 'all', 
      },
      {
        ru: "Пиджаки",
        en: 'Jackets'
      }
    ]

  },
  {
    id: 4,
    img: catalogImg8,
    name: "Толстовки",
    link: "/catalog/tolstovki",
    categoris: [
      {
        ru: 'Все', 
        en: 'all', 
      },
      {
        ru:  "Толстовки",
        en:  "sweatshirts",
      },
      {
        ru:  "Олимпийки",
        en:  "olympics",
      }
    ]

  },
  {
    id: 5,
    img: catalogImg3,
    name: "Джемперы и Кардиган",
    link: "/catalog/djemperiCardigan",
    categoris: [    
      {
        ru: 'Все',
        en: 'all',
      },
      {
        ru: 'Блуза',
        en: 'bluzka',
      },
      {
        ru: "Джемпер", 
        en: 'jumper', 
      },
      {
        ru: "Кардиган",
        en: 'cardigan',
      },
      {
        ru:  "Свитер",
        en: 'sweater' ,
      }
    ]
  },
];


export default CatalogList  