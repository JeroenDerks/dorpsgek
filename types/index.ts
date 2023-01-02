export type Color = [Number, Number, Number];

export type SportClub = {
  colors: Color[];
  name: string;
  slug: string;
  type: string;
};

export type TownData = {
  name: string;
  slug: string;
  sportClubs: SportClub[];
  zipCode: string;
};
