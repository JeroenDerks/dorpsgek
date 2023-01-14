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
  population: number;
  perc_men: number;
  perc_between_15_45: number;
  perc_between_15_25: number;
};
