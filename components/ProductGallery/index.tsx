import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Box, styled } from '@mui/material';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
  minHeight: 400,
  objectFit: 'cover',

  [theme.breakpoints.up('sm')]: {
    minHeight: 600
  }
}));

const ProductGallery = ({ zipCode }: { zipCode: string }) => {
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
        <SwiperSlide>
          <Image src={`/product/${zipCode}_model.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/product/${zipCode}_front.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/back.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/product/${zipCode}_closeup.jpg`} />
        </SwiperSlide>
      </Swiper>

      <Box display="flex" width={1} justifyContent="space-between">
        <SwiperButtonLeft className={`swiper-prev`}>
          <ChevronLeftIcon />
        </SwiperButtonLeft>
        <SwiperButtonRight className={`swiper-next`}>
          <ChevronRightIcon />
        </SwiperButtonRight>
      </Box>
    </>
  );
};

export default ProductGallery;
