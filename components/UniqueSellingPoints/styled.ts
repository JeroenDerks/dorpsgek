import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const BackgroundImageContainer = styled('div')({
  width: '100vw',
  height: 360,
  overflow: 'hidden',
  zIndex: 0,
  position: 'relative',
  borderTop: '2px solid white'
});

export const UniqueSellingPointsContainer = styled(Box)(({ theme }) => ({
  marginTop: -160,
  zIndex: 3,
  position: 'relative',
  borderRadius: 4,
  backgroundColor: 'white',
  border: '2px solid #eaeaec',

  [theme.breakpoints.up('sm')]: {
    marginTop: -80
  }
}));
