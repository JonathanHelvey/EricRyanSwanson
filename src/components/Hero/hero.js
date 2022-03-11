import React from 'react';
import { HeroWrapper, SiteHeaderTitle, SubHeaderTitle, titleWrapper } from './Hero.styled';
import image from '../../data/images/Eric-222.jpg';

const Hero = () => (
  <HeroWrapper>
    <div>
      <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
      <SubHeaderTitle>Theatre Artist & Film Actor</SubHeaderTitle>
    </div>
    <div>
      <img src={image} alt="Eric Ryan Swans Headshot" />
    </div>
  </HeroWrapper>
);

export default Hero;
