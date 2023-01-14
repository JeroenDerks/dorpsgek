import React from 'react';
import { townData } from '../../data/townData';

const SortPage = () => {
  const postiveTowndata = townData.filter((t) => {
    if (
      t.perc_between_15_25 >= 1 &&
      t.perc_between_15_45 >= 1 &&
      t.population >= 1
    )
      return t;
  });

  const targetAudience = postiveTowndata.map((t) => {
    return {
      ...t,
      ta1: t.population * (t.perc_between_15_25 * 0.01 * (t.perc_men * 0.01)),
      ta2: t.population * (t.perc_between_15_45 * 0.01 * (t.perc_men * 0.01))
    };
  });

  const totaalAudience = targetAudience.reduce(
    (acc, val) => {
      acc.population += val.population >= 1 ? val.population : 0;
      acc.ta1 += val.ta1 >= 1 ? val.ta1 : 0;
      acc.ta2 += val.ta2 >= 1 ? val.ta2 : 0;
      return acc;
    },
    {
      population: 0,
      ta1: 0,
      ta2: 0
    }
  );

  const sorted = targetAudience.sort((a, b) => (a.ta1 > b.ta1 ? -1 : 1));

  return (
    <div style={{ padding: '16px' }}>
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
          <td>
            <b>Naam</b>
          </td>
          <td>
            <b>Postcode</b>
          </td>
          <td>
            <b>Inwoners</b>
          </td>
          <td>
            <b>
              <u>Man 15-25 jaar</u>
            </b>
          </td>
          <td>
            <b>
              <u>Man 15-45 jaar</u>
            </b>
          </td>
          <td>
            <b>Man</b>
          </td>
          <td>
            <b>Age 15-25</b>
          </td>
          <td>
            <b>Age 15-45</b>
          </td>
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
            perc_between_15_25,
            perc_between_15_45,
            perc_men,
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
              <td>{perc_men}</td>
              <td>{perc_between_15_25} %</td>
              <td>{perc_between_15_45} %</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};

export default SortPage;
