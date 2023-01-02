import { SportClub } from '../../types';
import { ClubColors } from '../ClubColors';

export const ClubCard = ({ club }: { club: SportClub }) => {
  return (
    <>
      <a href={`/${club.slug}`} className="card">
        <ClubColors colors={club.colors} />
        <h3>{club.name}</h3>
        <h4>{club.type}</h4>
      </a>
      <style jsx>{`
        .card {
          border: 1px solid grey;
          padding: 8px;
          width: 320px;
          text-decoration: none;
          margin: 8px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};
