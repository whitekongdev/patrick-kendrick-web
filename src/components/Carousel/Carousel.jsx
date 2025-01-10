import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          {item.type === 'video' ? (
            <video
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
              className="carousel-video"
              // style={{
              //   width: '100%',
              //   height: '500px',
              //   borderRadius: '10px',
              //   objectFit: 'contain',
              // }}
            >
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.url}
              alt={`Slide ${index}`}
              className="carousel-image"
              // style={{
              //   width: '100%',
              //   height: '500px',
              //   objectPosition: 'center',
              //   borderRadius: '10px',
              //   objectFit: 'contain',
              // }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
