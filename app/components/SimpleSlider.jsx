import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/_simple-slider.module.scss';
import Image from 'next/image';
import Video from "./Video";

const SimpleSlider = ({ imgCarousel, videoCarousel, type }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: type === "jewelry" ? true : false,
    swipe: type === "jewelry" ? true : false,
    adaptiveHeight: true
  };
  
  return (
    <Slider {...settings}>
      {imgCarousel.map((img) => (
         <div className={styles.carouselImageContainer} key={Math.random()}>
          <Image 
            src={img} 
            alt="Dorian walking in front of the sea"
            className={styles.carouselImage}
            fill
          />

       </div>
      ))}
      {
        type === 'jewelry' && (
          <div className={styles.carouselVideoContainer}>
            <Video videoCarousel={videoCarousel}/>
          </div>
        )
      }
    </Slider>
  );
};

export default SimpleSlider;