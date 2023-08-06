import { SupportedZipCodes, Review } from '../types';

export const reviews: {
  [key in SupportedZipCodes]: Array<Review>;
} = {
  // Bovenkarspel
  '1611': [
    {
      name: 'M de Jong',
      review: 'Prima kwaliteit en zit goed - 1611!!',
      stars: 4.5
    },
    {
      name: 'Ruben',
      review: 'Dat hebben ze nie in Enkhuizen.',
      stars: 4
    }
  ],
  // Woudenberg
  '3931': [
    { name: 'van Aalten', review: 'Voor ons, voor altijd', stars: 4 },
    { name: 'Rob', review: '3981', stars: 5 }
  ],
  // Werkendam
  '4251': [
    {
      name: 'Bert M',
      review:
        'Goede hoodie met ons trots vol op de borst. Laat je zien voor Werkendam',
      stars: 4.5
    },
    { name: 'MvP', review: 'Klasse', stars: 5 }
  ],
  // Lewedorp
  '4456': [
    {
      name: 'vd L',
      review: 'Knaller. Goede kwaliteit en top ontwerpje hoor',
      stars: 4
    }
  ],
  // Siebengewald
  '5853': [
    {
      name: 'Bart',
      review: 'Mooi ding.',
      stars: 4.5
    }
  ],
  // Heythuysen
  '6093': [
    {
      name: 'Jakobs',
      review: '6093 jonge',
      stars: 5
    }
  ],
  // Puiflijk
  '6655': [
    {
      name: 'Robert',
      review: 'PUIFLIJK!',
      stars: 5
    }
  ],
  // Ruurlo
  '7261': [
    {
      name: 'van Lammer',
      review: 'Geel zwart. Kan niet beter',
      stars: 5
    }
  ],
  // Oldebroek
  '8096': [{ name: 'Erwin', review: '8096 en een groen hart.', stars: 5 }],
  // Ulrum
  '9971': [{ name: 'Freek V', review: 'Topper! Draag em met trots', stars: 5 }]
};
