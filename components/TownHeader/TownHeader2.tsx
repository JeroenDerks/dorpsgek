import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TownHeader2 = ({
  zipCode,
  townName
}: {
  zipCode: string;
  townName: string;
}) => {
  const titleProps = {
    color: 'white',
    fontWeight: 900,
    fontStyle: 'italic',
    lineHeight: 0.9,
    textTransform: 'uppercase',
    letterSpacing: '-0.05em'
  };
  return (
    <Box
      minHeight="calc(100vh - 200px)"
      width={1}
      sx={{ backgroundColor: 'black' }}
      position="relative"
      pb={'100px'}
    >
      <Box px="100px" pt="calc(100vh - 440px)">
        <Typography {...titleProps} fontSize={32} lineHeight={2}>
          Dorpsgek
        </Typography>
        <Typography fontSize={[60, 80, 140, 200]} {...titleProps}>
          {zipCode}
        </Typography>
        <Typography fontSize={[60, 80, 140, 200]} {...titleProps}>
          {townName}
        </Typography>
        <Typography fontSize={[60, 80, 200]} {...titleProps}>
          UIT
        </Typography>
        <Typography fontSize={[60, 80, 200]} {...titleProps}>
          LIEFDE
        </Typography>
        <Typography fontSize={[60, 80, 200]} {...titleProps}>
          VOOR
        </Typography>
        <Typography fontSize={[60, 80, 200]} {...titleProps}>
          MN
        </Typography>
        <Typography fontSize={[60, 80, 200]} {...titleProps}>
          DORP
        </Typography>
      </Box>
      {/* <Box
        height="100vh"
        sx={{
          backgroundImage: "url('/richard-boyle-wu7oy6XhAoU-unsplash.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
        top="-50vh"
      /> */}
    </Box>
  );
};

export default TownHeader2;
