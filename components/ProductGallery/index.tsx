import React from 'react';
import Image from 'next/image';
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

import ImageBack from '../../public/product/back.jpg';
import { getImagesPerCity } from './images';

const SwiperButtonLeft = styled(Button)({
  padding: '4px 16px',
  width: '100%',
  justifyContent: 'flex-start',
  display: 'flex'
});

const SwiperButtonRight = styled(SwiperButtonLeft)({
  justifyContent: 'flex-end'
});

const ImageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: 400,
  background: '#f0f0f0',

  [theme.breakpoints.up('sm')]: {
    minHeight: 600
  }
}));

export const ProductGallery = ({ town }: { town: TownData }) => {
  const currCityImages = getImagesPerCity(town.zipCodes[0]);

  const images = [
    { src: currCityImages.model },
    { src: currCityImages.front },
    { src: ImageBack },
    { src: currCityImages.closeUp }
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
        {images.map(({ src }, index) => (
          <SwiperSlide key={index}>
            <ImageContainer>
              <Image
                src={src}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                priority={index === 0}
              />
            </ImageContainer>
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
