import { color } from '@mui/system';
import React, { useRef } from 'react';

import { footbalClubsRaw } from './footbalClubsRaw';

const AllClubs = () => {
  const ref = useRef(null);

  const getClubName = (tableRow) => {
    const tableHeaderCell = tableRow.querySelector('th');
    const name = tableHeaderCell.innerHTML.split('<br>')[0];
    return name;
  };

  const getZipCode = (tableRow) => {
    const tableCell = tableRow.querySelectorAll('td')[0];
    const address = tableCell.innerHTML.split('<br>')[1];
    const zipCodeAndCity = address.split('(')[0];
    return zipCodeAndCity;
  };

  const getClubColors = (tableRow) => {
    const tableCell = tableRow.querySelectorAll('td')[1];
    const clubDetails = tableCell.innerHTML.split('Kleur shirt:')[1];
    const colorShirt = clubDetails?.split('<br>')[0];
    return colorShirt || clubDetails;
  };

  const logDetails = (clubName, zipCodeAndCity, colorShirt) => {
    const name = clubName.trim();
    const location = zipCodeAndCity.trim();
    const zipCode = location.substring(0, 4);
    // const city = location.substring(7, location.length).trim();

    const colors = colorShirt?.replace(' met ', '/').trim().split('/');
    const colorStrings = colors.map((col) => `"${col}" `).join(',');

    console.log(
      `{name: "${name}" , zipCode: "${zipCode}", colors: [ ${colorStrings} ] } ,`
    );
  };

  const handleData = () => {
    const tableRows = ref.current.querySelectorAll('tr');

    tableRows.forEach((tableRow, i) => {
      // if (i > 100) return;
      const clubName = getClubName(tableRow);
      const zipCodeAndCity = getZipCode(tableRow);
      const colorShirt = getClubColors(tableRow);

      logDetails(clubName, zipCodeAndCity, colorShirt);
    });
  };
  return (
    <>
      <button onClick={handleData}>Handle data</button>
      <table dangerouslySetInnerHTML={{ __html: footbalClubsRaw }} ref={ref} />
    </>
  );
};

export default AllClubs;
