import React from 'react';

import Carousel from '../Carousel';
import { HeroWrapper } from './Hero.styled';

const Hero = ({ siteTitle }) => (
  <div>
    <HeroWrapper>
      <Carousel />
    </HeroWrapper>
  </div>
);

export default Hero;
