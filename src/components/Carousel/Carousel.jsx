import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'; // Cambiado a 'swiper/modules'
import videoSrc from '../../assets/images/IMG_9633.MP4';
const ImageCarousel = ({ images, video }) => {
  const items = [video, ...images]
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {items.map((image, index) => (
        <SwiperSlide key={index}>
          {!index ? 
            <video
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            style={{ width: "100%" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          :
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
  }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;