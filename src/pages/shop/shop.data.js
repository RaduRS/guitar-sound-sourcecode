const SHOP_DATA = [
    {
      id: 1,
      title: 'Guitars',
      routeName: 'guitars',
      items: [
        {
          id: 1,
          name: 'Gibson Custom 60th Anniversary',
          imageUrl: 'https://andertons-productimages.imgix.net/393291-00531%20%281%29.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=3000&h=3000',
          price: '£5,699'
        },
        {
          id: 2,
          name: 'PRS McCarty',
          imageUrl: 'https://andertons-productimages.imgix.net/387464-0292806%20%281%29.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=3000&h=3000',
          price: '£3,699'
        },
        {
          id: 3,
          name: 'Taylor 224ce',
          imageUrl: 'https://andertons-productimages.imgix.net/388321-224CE-KDLX.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=1294&h=1294',
          price: '£1,499'
        },
        {
          id: 4,
          name: 'Epiphone Wildkat Royale',
          imageUrl: 'https://andertons-productimages.imgix.net/151377-tmp29A0.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=1794&h=1794',
          price: '£449'
        },
        {
          id: 5,
          name: 'Chapman ML1-8',
          imageUrl: 'https://andertons-productimages.imgix.net/407284-WMI20040034%20%281%29.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=3000&h=3000',
          price: '£949'
        },
        {
          id: 6,
          name: 'PRS Custom 22',
          imageUrl: 'https://andertons-productimages.imgix.net/401186-0298224%20%282%29.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=3000&h=3000',
          price: '£3,459'
        },
        {
          id: 7,
          name: 'Fender American II',
          imageUrl: 'https://andertons-productimages.imgix.net/409125-Fender-American-Professional-II-Stratocaster-Sienna-Sunburst-Maple-Fingerboard-Body.jpg?fit=fillmax&bg=FFFFFF&auto=compress&w=1197&h=1197',
          price: '£1,599'
        },
        {
          id: 8,
          name: 'Ibanez Artcore',
          imageUrl: 'https://andertons-productimages.imgix.net/257270-AS53_TBF_5B_02%20-%20Copy.jpg?w=680&h=680&fit=fill&bg=FFFFFF&auto=compress&auto=format',
          price: '£249'
        },
        {
          id: 9,
          name: 'Gibson Montana',
          imageUrl: 'https://andertons-productimages.imgix.net/292128-1535549369904.png?fit=fillmax&bg=FFFFFF&auto=compress&w=2858&h=2858',
          price: '£1,899'
        }
      ]
    },
    {
      id: 2,
      title: 'Basses',
      routeName: 'basses',
      items: [
        {
          id: 1,
          name: 'Fender American Ultra',
          imageUrl: 'https://andertons-productimages.imgix.net/361689-0199010712_gtr_frt_001_rr%20-%20Copy.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,799'
        },
        {
          id: 2,
          name: 'Fender American P Bass',
          imageUrl: 'https://andertons-productimages.imgix.net/339605-0194650705%20Hero.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,399'
        },
        {
          id: 3,
          name: 'Fender 60th Anniversary',
          imageUrl: 'https://andertons-productimages.imgix.net/403002-Screenshot%202020-08-13%20at%2014.18.05.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,199'
        },
        {
          id: 4,
          name: 'Fender Professional II',
          imageUrl: 'https://andertons-productimages.imgix.net/403110-Screenshot%202020-08-14%20at%2011.57.09.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,699'
        },
        {
          id: 5,
          name: 'G&L USA Fallout',
          imageUrl: 'https://andertons-productimages.imgix.net/362343-1574073142598.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,299'
        },
        {
          id: 6,
          name: 'Ibanez EHB1500-DEF',
          imageUrl: 'https://andertons-productimages.imgix.net/369765-EHB1500_DEF_1P_01%20-%20Copy.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,239'
        },
        {
          id: 7,
          name: 'Hofner HCT President',
          imageUrl: 'https://andertons-productimages.imgix.net/275465-1526542641835.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£715'
        },
        {
          id: 8,
          name: 'Gretsch G2220',
          imageUrl: 'https://andertons-productimages.imgix.net/257630-2514730580_gtr_frt_001_rr%20-%20Copy.jpg?w=680&h=680&fit=fill&bg=FFFFFF&auto=compress&auto=format',
          price: '£319'
        }
      ]
    },
    {
      id: 3,
      title: 'Amplifiers',
      routeName: 'amplifiers',
      items: [
        {
          id: 1,
          name: 'Fender Tone Master',
          imageUrl: 'https://andertons-productimages.imgix.net/343539-1562844422853.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£799'
        },
        {
          id: 2,
          name: 'Marshall DSL40CR',
          imageUrl: 'https://andertons-productimages.imgix.net/299017-291915-marshall-dsl40cr-front.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£599'
        },
        {
          id: 3,
          name: 'Laney L20T-212',
          imageUrl: 'https://andertons-productimages.imgix.net/64710-tmp95A1.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,049'
        },
        {
          id: 4,
          name: 'Line 6 DT25',
          imageUrl: 'https://andertons-productimages.imgix.net/75380-tmp2DC1.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£469'
        },
        {
          id: 5,
          name: 'Orange Rockerverb',
          imageUrl: 'https://andertons-productimages.imgix.net/74757-tmpD292.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£1,599'
        }
      ]
    },
    {
      id: 4,
      title: 'FX Pedals',
      routeName: 'fxpedals',
      items: [
        {
          id: 1,
          name: 'Source Audio Collider',
          imageUrl: 'https://andertons-productimages.imgix.net/357835-productpage-colliderfront_orig.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£349'
        },
        {
          id: 2,
          name: 'Alexander Pedals',
          imageUrl: 'https://andertons-productimages.imgix.net/282162-wavel.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£199'
        },
        {
          id: 3,
          name: 'Tone City Lil Heat',
          imageUrl: 'https://andertons-productimages.imgix.net/399760-Tone-City-Lil-Heat-Greg-Koch-Overdrive-Pedal.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£44'
        },
        {
          id: 4,
          name: 'Boss RV-500',
          imageUrl: 'https://andertons-productimages.imgix.net/147733-tmp3C59.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£319'
        },
        {
          id: 5,
          name: 'Meris Hedra 3',
          imageUrl: 'https://andertons-productimages.imgix.net/335233-meris-hedra-front.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£319'
        },
        {
          id: 6,
          name: 'JHS Pedals',
          imageUrl: 'https://andertons-productimages.imgix.net/363873-1575038363078.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£135'
        },
        {
          id: 7,
          name: 'JHS Pedals',
          imageUrl: 'https://andertons-productimages.imgix.net/363601-JHS-Double-Barrel-Hero.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£299'
        }
      ]
    },
    {
      id: 5,
      title: 'Accessories',
      routeName: 'accessories',
      items: [
        {
          id: 1,
          name: 'Fender FT-1 ',
          imageUrl: 'https://andertons-productimages.imgix.net/353039-1568300856751.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£9'
        },
        {
          id: 2,
          name: 'Hercules Guitar Hanger',
          imageUrl: 'https://andertons-productimages.imgix.net/286648-gsp38wb-plus_1_hr.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£13'
        },
        {
          id: 3,
          name: 'Rode NT1',
          imageUrl: 'https://andertons-productimages.imgix.net/393616-Rode-NT1-Cardioid-Condenser-Microphone-Black-Kit.jpg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£199'
        },
        {
          id: 4,
          name: 'Tourtech Capo',
          imageUrl: 'https://andertons-productimages.imgix.net/320609-TTA-C01BK%20%282%29.JPG?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£9'
        },
        {
          id: 5,
          name: 'Air Straps',
          imageUrl: 'https://andertons-productimages.imgix.net/325833-18SpEnN8.jpeg?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£54'
        },
        {
          id: 6,
          name: 'Dunlop Tortex',
          imageUrl: 'https://andertons-productimages.imgix.net/321068-1549537172546.png?w=768&h=768&fit=fill&bg=FFFFFF&auto=format&ixlib=imgixjs-3.3.2',
          price: '£5'
        }
      ]
    }
  ]


  export default SHOP_DATA;