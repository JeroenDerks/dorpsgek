import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Box, styled } from '@mui/material';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TownData } from '../../types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperButtonLeft = styled(Button)({
  padding: '4px 16px',
  width: '100%',
  justifyContent: 'flex-start',
  display: 'flex'
});

const SwiperButtonRight = styled(SwiperButtonLeft)({
  justifyContent: 'flex-end'
});

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  minHeight: 400,
  background: '#f0f0f0',

  [theme.breakpoints.up('sm')]: {
    minHeight: 600
  }
}));

export const ProductGallery = ({ town }: { town: TownData }) => {
  const images = [
    { src: `/product/${town.zipCodes[0]}_model.jpg`, alt: 'model' },
    { src: `/product/${town.zipCodes[0]}_front.jpg`, alt: 'front' },
    { src: `/product/back.jpg`, alt: 'back' },
    { src: `/product/${town.zipCodes[0]}_closeup.jpg`, alt: 'closeup' }
  ];

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={{
          nextEl: `.swiper-next`,
          prevEl: `.swiper-prev`
        }}
        loop
      >
        {images.map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <Image src={src} alt={`${town.zipCodes[0]} hoodie ${alt}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box display="flex" width={1} justifyContent="space-between" mt={1}>
        <SwiperButtonLeft className="swiper-prev">
          <ChevronLeftIcon />
        </SwiperButtonLeft>
        <SwiperButtonRight className="swiper-next">
          <ChevronRightIcon />
        </SwiperButtonRight>
      </Box>
    </>
  );
};
