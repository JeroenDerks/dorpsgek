import React, { useRef } from 'react';

import { footbalClubsRaw } from '../data/footbalClubsRaw';

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

  const handleData = () => {
    console.log(ref.current);
    const tableRows = ref.current.querySelectorAll('tr');
    tableRows.forEach((tableRow, i) => {
      if (i > 100) return;

      const clubName = getClubName(tableRow);
      console.log(clubName.trim());

      const zipCodeAndCity = getZipCode(tableRow);
      console.log(zipCodeAndCity.trim());

      const colorShirt = getClubColors(tableRow);
      console.log(colorShirt.trim());
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
