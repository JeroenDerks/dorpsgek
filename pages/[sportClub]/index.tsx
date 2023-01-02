import React from 'react';
import { ClubColors } from '../../components/ClubColors';
import { PageLayout } from '../../components/PageLayout';
import { townData } from '../../data/townData';
import { SportClub } from '../../types';

const SportClubPage = ({ sportClub }: { sportClub: SportClub }) => {
  return (
    <PageLayout>
      <h1>Uit liefde voor {sportClub.name}</h1>
      <ClubColors colors={sportClub.colors} />
    </PageLayout>
  );
};

export default SportClubPage;

export async function getStaticPaths() {
  const allSportClubs = [];

  townData.forEach(({ sportClubs }) => {
    sportClubs.forEach(({ slug }) => {
      allSportClubs.push({ params: { sportClub: slug } });
    });
  });

  return {
    paths: allSportClubs,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let currClub;

  townData.forEach(({ sportClubs }) =>
    sportClubs.forEach((club) => {
      if (club.slug === params.sportClub) {
        currClub = club;
      }
    })
  );

  return {
    props: {
      sportClub: currClub
    }
  };
}
