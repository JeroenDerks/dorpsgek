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

const SwiperButton = styled(Button)({
  padding: 0,
  width: 40,
  maxWidth: 40,
  minWidth: 40
});

const Image = styled('img')({
  width: '100%',
  minHeight: 600,
  objectFit: 'cover'
});

const ProductGallery = ({ zipCode }: { zipCode: string }) => {
  return (
    <Box display="flex" height="100%">
      <SwiperButton className={`swiper-prev`}>
        <ChevronLeftIcon />
      </SwiperButton>

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

      <SwiperButton className={`swiper-next`}>
        <ChevronRightIcon />
      </SwiperButton>
    </Box>
  );
};

export default ProductGallery;
