import React from 'react';
import { styled } from '@mui/material';
import { Color } from '../../types';

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
  color: '#252022',
  background: '#252022',
  fontStyle: 'italic',
  fontSize: 12,
  fontWeight: 900,
  zIndex: 0
});

const ZipCode1 = styled(ZipCode)(({ col, i }: { col: Color; i: number }) => ({
  left: `calc(47% + ${i * 1}px)`,
  color: `rgb(${col[0]}, ${col[1]}, ${col[2]})`,
  background: 'none',
  zIndex: `${5 - i}`
}));

const ZipCode3 = styled(ZipCode)({
  left: 'calc(47% - 1px)',
  background: 'none',
  color: 'white',
  zIndex: 2
});

const ClubFront = ({
  colors,
  zipCode
}: {
  colors: Color[];
  zipCode: string;
}) => {
  return (
    <Container>
      <Image src="/front.webp" />
      <ZipCode>{zipCode}</ZipCode>

      {colors.length === 1 && <ZipCode3>{zipCode}</ZipCode3>}
      {colors.reverse().map((col, i) => (
        <ZipCode1 {...{ col, i }}>{zipCode}</ZipCode1>
      ))}
    </Container>
  );
};

export default ClubFront;
