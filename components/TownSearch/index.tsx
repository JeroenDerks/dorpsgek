import { useState } from 'react';
import { townData } from '../../data/townData';
import { TownData } from '../../types';

export const TownSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<TownData[] | false>();

  const handleSearch = () => {
    if (searchValue.length < 1) return;

    const matches = townData.filter((town) =>
      town.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(matches);
    if (matches.length >= 1) setResults(matches);
    else setResults(false);
  };

  const createUrl = (zipCode: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL_PREFIX}${zipCode}.${process.env.NEXT_PUBLIC_BASE_URL_SUFFIX}`;

  return (
    <>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Vind jouw dorp"
      />
      <button onClick={handleSearch}>Zoek</button>
      <div>
        {results &&
          results?.map(({ name, zipCode, slug }) => (
            <a href={createUrl(zipCode)} key={slug}>
              {name}
            </a>
          ))}
      </div>
      {results === false && (
        <>
          <p>Helaas! De gekte is nog niet van toepassing in jouw dorp</p>
          <p>
            Stuur een mail naar: nieuwe-club@dorpsgek.shop en wij zullen je
            proberen te helpen.
          </p>
        </>
      )}
      <></>
      <style jsx>{`
        input {
          color: black;
          padding: 8px;
        }
        button {
          color: black;
          padding: 8px 16px;
        }
      `}</style>
    </>
  );
};
