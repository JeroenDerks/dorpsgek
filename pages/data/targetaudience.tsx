import React from 'react';
import { townData } from '../../data/townData';
import { Color } from '../../types';
import { chosenVillages } from '../../data/chosenVillages';
import { colorNamesToRgb } from './../../data/colorMap';

const tableHeader = [
  'Naam',
  'Postcode',
  'Inwoners',
  'Man 15-25 jaar',
  'Man 15-45 jaar',
  '% NLer',
  'Voetbalclubs'
];

const TargetAudiencePage = () => {
  // Filters for towns with missing data (represented by negative values)
  const postiveTowndata = townData.filter((t) => {
    if (
      t.perc_between_15_25 >= 1 &&
      t.perc_between_15_45 >= 1 &&
      t.population >= 1
    )
      return t;
  });

  // Calculate target audience (ta1, ta2)
  const targetAudience = postiveTowndata.map((t) => {
    return {
      ...t,
      ta1: t.population * (t.perc_between_15_25 * 0.01 * (t.perc_men * 0.01)),
      ta2: t.population * (t.perc_between_15_45 * 0.01 * (t.perc_men * 0.01))
    };
  });

  // Sum the total target audiences and population
  const totaalAudience = targetAudience.reduce(
    (acc, val) => {
      acc.population += val.population;
      acc.ta1 += val.ta1;
      acc.ta2 += val.ta2;
      return acc;
    },
    { population: 0, ta1: 0, ta2: 0 }
  );

  // Sort by specified property
  const sortKey = 'ta1';
  const sorted = targetAudience.sort((a, b) =>
    a[sortKey] > b[sortKey] ? -1 : 1
  );

  const selectedTowns = sorted.filter((town) =>
    chosenVillages.includes(town.zipCodes[0])
  );

  const convertRgbToText = (col: Color) => {
    const result = Object.keys(colorNamesToRgb).filter((obj) => {
      const currCol = colorNamesToRgb[obj];
      if (
        currCol[0] === col[0] &&
        currCol[1] === col[1] &&
        currCol[2] === col[2]
      )
        return obj;
    });

    return result;
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ padding: '8px', maxWidth: 880 }}>
        <h1>Gekozen dorpen:</h1>
        <table cellSpacing={8}>
          <tr>
            {tableHeader.map((title) => (
              <td>
                <b>{title}</b>
              </td>
            ))}
            <td>
              <b>Voetbal kleuren</b>
            </td>
          </tr>
          <tr></tr>
          {selectedTowns.map(
            ({
              name,
              population,
              perc_nederlands,
              sportClubs,
              ta1,
              ta2,
              zipCodes
            }) => (
              <tr>
                <td>{name}</td>
                <td>{zipCodes[0]}</td>
                <td>{population.toLocaleString()}</td>
                <td>{Math.round(ta1).toLocaleString()}</td>
                <td>{Math.round(ta2).toLocaleString()}</td>
                <td>{perc_nederlands}</td>
                <td>{sportClubs?.map(({ name }) => name).join(' + ')}</td>
                <td>
                  {sportClubs?.map(({ colors }) =>
                    colors.map((col) => convertRgbToText(col)).join(', ')
                  )}
                </td>
              </tr>
            )
          )}
        </table>
      </div>
      <div style={{ padding: '8px', maxWidth: 880 }}>
        <h2>Dorpen met 1 postcode gerangschikt op doelgroep grote</h2>
        <p>
          Doelgroep is bepaald door het inwonersaantal te vergelijken met het
          aantal mannen in de leeftijdscategorie 15 - 25 jaar
        </p>
        <p>Als secundaire doelgroep geldt: mannen leeftijd 15 - 45 jaar</p>
        <h4 style={{ marginTop: 24 }}>
          Sommige dorpen hebben meerdere postcodes
        </h4>
        <p>
          Er zijn redelijk wat dorpen die meerdere postcodes hebben en voor het
          gemak zijn uitgesloten zijn van deze lijst. Ter indicatie een lijst
          van uitgesloten dorpen vanwege meerdere postcodes beginnende met de
          letter A:
          <br />
          <i>Aalten</i>, <i>Achterveld</i>, <i>Alblasserdam</i>,{' '}
          <i>Alphen aan den Rijn</i>, <i>Alphen</i>, <i>Alteveer</i>,{' '}
          <i>Appingedam</i>, <i>Assen</i>, <i>Assendelft</i>
          <br />
          <br />
          Het is aannemelijk dat sommige van deze dorpen wel 1 representatieve
          postcode hebben en dat de andere postcodes voor bv postbussen of voor
          een buitengebied gelden.
        </p>
      </div>
      <table cellSpacing={8}>
        <tr>
          {tableHeader.map((title) => (
            <td>
              <b>{title}</b>
            </td>
          ))}
        </tr>
        <tr></tr>
        <tr>
          <td>
            <b>Totaal:</b>
          </td>
          <td>...</td>
          <td>{totaalAudience.population.toLocaleString()}</td>
          <td>{Math.round(totaalAudience.ta1).toLocaleString()}</td>
          <td>{Math.round(totaalAudience.ta2).toLocaleString()}</td>
        </tr>
        <tr></tr>
        <tr></tr>
        {sorted.map(
          ({
            name,
            population,
            perc_nederlands,
            sportClubs,
            ta1,
            ta2,
            zipCodes
          }) => (
            <tr>
              <td>{name}</td>
              <td>{zipCodes[0]}</td>
              <td>{population.toLocaleString()}</td>
              <td>{Math.round(ta1).toLocaleString()}</td>
              <td>{Math.round(ta2).toLocaleString()}</td>
              <td>{perc_nederlands}</td>
              <td>{sportClubs?.map(({ name }) => name).join(' + ')}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};

export default TargetAudiencePage;
