import { Box } from '@mui/material';
import { Color } from '../../types';

export const ClubColors = ({ colors, height }: ClubColorsProps) => {
  return (
    <Box display="flex" borderRadius={4} overflow="hidden">
      {colors?.map((color, i) => (
        <Box
          key={i}
          style={{
            width: 100 / colors.length + '%',
            height: height || '48px',
            backgroundColor: `rgb(${color})`
          }}
        />
      ))}
    </Box>
  );
};

type ClubColorsProps = {
  colors: Color[];
  height?: number;
};
