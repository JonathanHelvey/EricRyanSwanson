import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { HeroWrapper } from './Hero.styled';
import Carousel from '../Carousel';

const Hero = () => (
  <HeroWrapper>
    <Carousel />
  </HeroWrapper>
);

export default Hero;
