import { SupportedZipCodes } from '../types';

const zipCodeColors: Record<SupportedZipCodes, string> = {
  '1611': '#ed1d25',
  '3931': '#efe20f',
  '4251': '#ffffff',
  '4456': '#ed1d25',
  '5853': '#f05822',
  '6093': '#2a3688',
  '7261': '#efe20f',
  '8096': '#efe20f',
  '9971': '#4790cd'
};

export const mapZipCodeToColor = (currZipCode: SupportedZipCodes) =>
  zipCodeColors[currZipCode];