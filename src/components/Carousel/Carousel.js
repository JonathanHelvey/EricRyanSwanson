import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Section3 } from '../../themes/theme';
import { CarouselWrapper } from './Carousel.styled';

const DemoCarousel = () => {
  return (
    <Section3>
      <CarouselWrapper>
        <Carousel autoPlay interval={10000} infiniteLoop>
          <CarouselWrapper>
            <img alt="ericryanswanson" src={require('../../data/images/EricBanner1.jpg')} />
          </CarouselWrapper>
          <CarouselWrapper>
            <img alt="ericryanswanson" src={require('../../data/images/EricBanner2.jpg')} />
          </CarouselWrapper>
          <CarouselWrapper>
            <img alt="ericryanswanson" src={require('../../data/images/EricBanner3.jpg')} />
          </CarouselWrapper>
        </Carousel>
      </CarouselWrapper>
    </Section3>
  );
};


export default DemoCarousel;
