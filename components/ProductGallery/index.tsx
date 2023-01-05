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

const Image = styled('img')({
  width: '100%',
  height: '100%'
});

const SwiperButton = styled(Button)({
  padding: 0,
  width: 40,
  maxWidth: 40,
  minWidth: 40
});

const ProductGallery = ({ id }: { id: string }) => {
  return (
    <Box display="flex">
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
        autoplay={{ disableOnInteraction: true, delay: 5000 }}
      >
        <SwiperSlide>
          <div>slide 1</div>
        </SwiperSlide>

        <SwiperSlide>
          <div>slide 2</div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
          />
        </SwiperSlide>
      </Swiper>

      <SwiperButton className={`swiper-next-${id}`}>
        <ChevronRightIcon />
      </SwiperButton>
    </Box>
  );
};

export default ProductGallery;
