import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Section1 } from '../../themes/theme';
import { CarouselWrapper } from './Carousel.styled';

const DemoCarousel = () => (
  <Section1>
    <CarouselWrapper>
      <Carousel showThumbs={false} showStatus={false} autoPlay interval={10000} infiniteLoop>
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
    </CarouselWrapper>
  </Section1>
);


export default DemoCarousel;
