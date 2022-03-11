import React from 'react';
import { Button } from '@material-ui/core';
import { HeroWrapper, SiteHeaderTitle, SubHeaderTitle, MyButton, SocialIconWrapper, Headshot, MyImage } from './Hero.styled';
import image from '../../data/images/eric-222.jpg';
import SocialMediaIcons from '../SocialMediaIcons';

const Hero = () => (
  <HeroWrapper>
    <div>
      <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
      <SubHeaderTitle>Theatre Artist & Film Actor</SubHeaderTitle>
      <MyButton variant="outlined" size="large">Resume</MyButton>
      <MyButton variant="outlined" size="large">Demo Reel</MyButton>
      <MyButton variant="outlined" size="large">HeadShots</MyButton>
      <SocialIconWrapper>
        <SocialMediaIcons />
      </SocialIconWrapper>
    </div>
    <div>
      <MyImage src={image} alt="Eric Ryan Swans Headshot" />
    </div>
  </HeroWrapper>
);

export default Hero;
