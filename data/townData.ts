import { TownData } from '../types';

export const townData: TownData[] = [
  {
    name: 'Bennekom',
    slug: 'bennekom',
    zipCode: '6721',
    sportClubs: [
      {
        name: 'VV Bennekom',
        slug: 'vv-bennekom',
        type: 'Voetbal',
        colors: [
          [255, 0, 0],
          [255, 255, 255]
        ]
      },
      {
        name: 'DVO',
        slug: 'dvo',
        type: 'Korfbal',
        colors: [
          [0, 200, 0],
          [255, 255, 255],
          [0, 200, 0]
        ]
      }
    ]
  }
];
