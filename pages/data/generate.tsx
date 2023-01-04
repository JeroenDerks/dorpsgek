import React from 'react';
import { townsWithZipcodes } from './../../data/townsWithZipcode';

const Generate = () => {
  const [data, setData] = React.useState<any>([]);

  const handleGenerateData = () => {
    const singleZipCodeTowsn = townsWithZipcodes.filter(
      (town) => town.zipCodes.length === 1
    );
    console.log(townsWithZipcodes);
    setData(singleZipCodeTowsn);
  };

  return (
    <div>
      <button onClick={handleGenerateData}>Generate Data</button>

      {data?.map(({ name, zipCodes }) => (
        <p>{`
        {
        name: "${name}",
        slug: "${name
          .toLowerCase()
          .replace(' ', '-')
          .replace('ë', 'e')
          .replace("'", '')}",
        zipCodes: ["${zipCodes[0]}"],
        sportClubs: []} ,`}</p>
      ))}
    </div>
  );
};

export default Generate;
