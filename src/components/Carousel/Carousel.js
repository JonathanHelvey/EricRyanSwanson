import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
  return (
    <Carousel autoPlay interval={10000} infiniteLoop>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/EricBanner1.jpg')} />
      </div>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/EricBanner2.jpg')} />
      </div>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/EricBanner3.jpg')} />
      </div>
    </Carousel>
  );
};


export default DemoCarousel;
