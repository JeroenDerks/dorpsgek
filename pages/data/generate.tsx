import React from 'react';
import { townsWithZipcodes } from './../../data/townsWithZipcode';
import { footbalClubsWithZipcodes } from './../../data/footbalClubsWithZipcodes';

import population from '../../data/population.csv';

const Generate = () => {
  const [data, setData] = React.useState<any>([]);

  const handleGenerateData = () => {
    const singleZipCodeTowsn = townsWithZipcodes.filter(
      (town) => town.zipCodes.length === 1
    );

    setData(singleZipCodeTowsn);
  };

  const findClubsForTown = (townZipCode) => {
    const matches = footbalClubsWithZipcodes.filter(
      (club) => club?.zipCode === townZipCode
    );
    return matches.map((club) => {
      return `{ name: "${club?.name}", 
                colors: [${club.colors?.map(
                  (col) => `[${colors[col.toLowerCase()]}]`
                )}],
                type: "voetbal"

              }, `;
    });
  };

  const colors = {
    blauw: [0, 0, 255],
    geel: [255, 255, 0],
    groen: [0, 200, 0],
    oranje: [100, 150, 0],
    rood: [255, 0, 0],
    wit: [255, 255, 255],
    zwart: [0, 0, 0],
    paars: [255, 0, 255],
    grijs: [100, 100, 100]
  };

  const formatSlug = (name) =>
    name.toLowerCase().replace(' ', '-').replace('ë', 'e').replace("'", '');

  const findPopulation = (zipCode) => {
    console.log(zipCode);

    const town = population.filter(
      (pop) => pop['Postcode-4'] + '' === zipCode && pop
    )[0];
    const total = town?.['Totaal'];
    if (!total) return null;
    const targetGroup = town['15 tot 25 jaar'] + town['25 tot 45 jaar'];
    return `population: ${total},
            perc_men: ${Math.round((town['Man'] / total) * 100)} ,
            perc_between_15_45: ${Math.round((targetGroup / total) * 100)} ,
            perc_between_15_25: ${Math.round(
              (town['15 tot 25 jaar'] / total) * 100
            )}`;
  };

  return (
    <div>
      <button onClick={handleGenerateData}>Generate Data</button>

      {data?.map(
        ({ name, zipCodes }, i) => (
          // i < 2 && (
          <p>{`
        {
          name: "${name}",
          slug: "${formatSlug(name)}",
          zipCodes: ["${zipCodes[0]}"],
          sportClubs: [ ${findClubsForTown(zipCodes[0])}],
          ${findPopulation(zipCodes[0])} 
      },
      `}</p>
        )
        // )
      )}
    </div>
  );
};

export default Generate;
