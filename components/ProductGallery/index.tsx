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
import Front from '../ProductImage/front';

const SwiperButton = styled(Button)({
  padding: 0,
  width: 40,
  maxWidth: 40,
  minWidth: 40
});

const Image = styled('img')({
  width: '100%',
  height: '100%'
});

const ProductGallery = ({ zipCode, id }: { id: string; zipCode: string }) => {
  return (
    <Box display="flex" height="100%">
      <SwiperButton className={`swiper-prev-${id}`}>
        <ChevronLeftIcon />
      </SwiperButton>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={{
          nextEl: `.swiper-next-${id}`,
          prevEl: `.swiper-prev-${id}`
        }}
        loop
      >
        <SwiperSlide>
          <Front zipCode={zipCode} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/back.webp" />
        </SwiperSlide>
      </Swiper>

      <SwiperButton className={`swiper-next-${id}`}>
        <ChevronRightIcon />
      </SwiperButton>
    </Box>
  );
};

export default ProductGallery;
