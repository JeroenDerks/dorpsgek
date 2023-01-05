import React from 'react';
import { ClubColors } from '../../components/ClubColors';
import { PageLayout } from '../../components/PageLayout';
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
