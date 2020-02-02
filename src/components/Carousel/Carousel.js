import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
  return (
    <Carousel autoPlay interval={10000} infiniteLoop>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/Eric-222.jpg')} />
      </div>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/Eric-164.jpg')} />
      </div>
      <div>
        <img alt="ericryanswanson" src={require('../../data/images/Eric-151.jpg')} />
      </div>
    </Carousel>
  );
};


export default DemoCarousel;
