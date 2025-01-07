import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/_simple-slider.module.scss';
import Image from 'next/image';
import Video from "./Video";
import useDetectDevTools from "./customHooks/useDetectDevTools";

const SimpleSlider = ({ imgCarousel, videoCarousel, type, handleClose }) => {
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

  const isDevToolsOpen = useDetectDevTools();

  return (
    <Slider {...settings}>
      {imgCarousel.map((img) => (
         <div className={styles.carouselImageContainer} key={Math.random()}>
           {
             isDevToolsOpen ? null : (
               <Image 
                 src={img} 
                 alt="Dorian walking in front of the sea"
                 className={styles.carouselImage}
                 fill
               />
             )
           }

       </div>
      ))}
      {
        type === 'jewelry' && (
          <div className={styles.carouselVideoContainer}>
            <Video videoCarousel={videoCarousel} handleClose={handleClose}/>
          </div>
        )
      }
    </Slider>
  );
};

export default SimpleSlider;