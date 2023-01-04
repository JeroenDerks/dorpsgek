export type Color = [Number, Number, Number] | [undefined];

export type SportClub = {
  colors: Color[];
  name: string;
  type: string;
};

export type TownData = {
  name: string;
  slug: string;
  sportClubs: SportClub[];
  zipCodes: string[];
};
