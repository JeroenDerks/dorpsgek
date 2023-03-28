export type Color = [Number, Number, Number] | [undefined];
export type SupportedZipCodes =
  | '1611'
  | '3931'
  | '4251'
  | '4456'
  | '5853'
  | '6093'
  | '6655'
  | '7261'
  | '8096'
  | '9971';

export type SportClub = {
  colors: Color[];
  name: string;
  type: string;
};

export type TownData = {
  name: string;
  slug: string;
  sportClubs: SportClub[];
  zipCodes: SupportedZipCodes[];
  population: number;
  perc_men: number;
  perc_between_15_45: number;
  perc_between_15_25: number;
  perc_nederlands: number;
};

export type ShirtSizes = 's' | 'm' | 'l' | 'xl' | 'xxl';
