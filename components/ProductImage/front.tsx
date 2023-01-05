import React from 'react';
import { styled } from '@mui/material';

const Image = styled('img')({
  width: '100%',
  height: '100%'
});

const Container = styled('div')({
  position: 'relative'
});

const ZipCode = styled('p')({
  position: 'absolute',
  top: '33%',
  left: '47%',
  color: 'white',
  background: '#252022',
  fontStyle: 'italic',
  fontSize: 12,
  fontWeight: 900
});

const Front = ({ zipCode }: { zipCode: string }) => {
  return (
    <Container>
      <Image src="/front.webp" />
      <ZipCode>{zipCode}</ZipCode>
    </Container>
  );
};

export default Front;
