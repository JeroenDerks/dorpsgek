import React, { useRef } from 'react';

import { zipCodesRaw } from '../../data/raw/zipCodesRaw';

const AllZipCodes = () => {
  const ref = useRef(null);

  const getZipCode = (tableRow) => {
    const tableCell = tableRow.querySelectorAll('td')[4];
    const link = tableCell?.querySelector('a');
    const zipCode = link?.innerHTML;
    return zipCode;
  };

  const getCity = (tableRow) => {
    const tableCell = tableRow.querySelectorAll('td')[2];
    const link = tableCell?.querySelector('a');
    const city = link?.innerHTML;
    return city;
  };

  const matchTownsToZipcodes = (zipcodesWithTowns) => {
    const arr = Array.from(zipcodesWithTowns, (entry) => {
      return { city: entry[1], zipCode: entry[0] };
    });

    const townsWithZipcodes = arr.reduce((acc, val) => {
      const key = `"${val.city}"`;
      if (acc[key]) acc[key].push(val.zipCode);
      else acc[key] = [val.zipCode];

      return acc;
    }, []);

    return townsWithZipcodes;
  };

  const handleData = async () => {
    console.log(ref.current);
    const tableRows = ref.current.querySelectorAll('tr');

    const map = new Map();

    tableRows.forEach((tableRow, i) => {
      const zipCode = getZipCode(tableRow);
      const city = getCity(tableRow);

      map.set(zipCode, city);
    });

    const townsWithZipcodes = matchTownsToZipcodes(map);
    console.log(townsWithZipcodes);
  };

  return (
    <>
      <button onClick={handleData}>Handle data</button>
      <table dangerouslySetInnerHTML={{ __html: zipCodesRaw }} ref={ref} />
    </>
  );
};

export default AllZipCodes;
