export const initialState = {
  products: {
    data: [
        {
          _id: '1',
          name: 'Watermelon Lolipop',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/watermelonLollipop.jpg' ,
          imgCart: '/img/smallImg/watermelonLollipopSmall.jpg',
          flavour: 'fruit',
          price: 10,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '2',
          name: 'Hard Candy Mix',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/hart.jpg',
          imgCart: '/img/smallImg/hartSmall.jpg',
          flavour: 'fruit',
          price: 16,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '3',
          name: 'Rainbbow jelly',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/rainbowJelly2.jpg',
          imgCart: '/img/smallImg/rainbowJelly2Small.jpg',
          flavour: 'fruit',
          price: 8,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '4',
          name: 'Strawberry Kisses',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/colaJelly.jpg',
          imgCart: '/img/smallImg/colaJellySmall.jpg',
          flavour: 'fruit',
          price: 18,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '5',
          name: 'Chewwing Gum',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/HartCandy.jpg',
          imgCart: '/img/smallImg/HartCandySmall.jpg',
          flavour: 'mix',
          price: 24,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '6',
          name: 'Mint hard candy',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/mintOnPlate.jpg',
          imgCart: '/img/smallImg/mintOnPlateSmall.jpg',
          flavour: 'traditional',
          price: 17,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '7',
          name: 'Hart Candy',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/chocolateLolipop.jpg',
          imgCart: '/img/smallImg/chocolateLolipopSmall.jpg',
          flavour: 'fruit',
          price: 30,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '8',
          name: 'Coca-cola jelly',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/frutmix.jpg',
          imgCart: '/img/smallImg/frutmixSmall.jpg',
          flavour: 'fruit',
          price: 2,
          inCart: false,
          count: 0,
          total: 0,
        },
        {
          _id: '9',
          name: 'Mint hard candy',
          description:  'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
          img: '/img/mail.jpg',
          imgCart: '/img/mix.jpg',
          flavour: 'traditional',
          price: 17,
          inCart: false,
          count: 0,
          total: 0,
        }
    ],
    loading: {
      active: false,
      error: false,
    },
  },

  cart: [
    {
      _id: '1',
      name: 'Watermelon Lolipop',
      price: 10,
      img: '/img/smallImg/watermelonLollipopSmall.jpg',
    },
    {
      _id: '6',
      name: 'mint hard candy',
      price: 17,
      img: '/img/smallImg/mintOnPlateSmall.jpg',    },
  ],
};
