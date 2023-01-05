import { townData } from '../data/townData';

export async function getPageData(): Promise<any> {
  const { host } = window.location;
  let isDev = host.includes('localhost');
  let splitHost = host.split('.');

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let subDomain = splitHost[0];
    if (subDomain === 'www' || subDomain.length === 0) {
      return null;
    }

    const matchingTown = townData.find(
      (town) =>
        subDomain.toLowerCase() === town.name.toLowerCase() ||
        subDomain === town.zipCodes[0]
    );

    if (matchingTown) return matchingTown;
    else return { errorCode: 404, message: 'Town not found' };
  }
}
