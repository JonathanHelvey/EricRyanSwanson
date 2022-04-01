import React from 'react';
import { navigate } from 'gatsby';
import { HeroWrapper, SiteHeaderTitle, SubHeaderTitle, MyButton, MyImageContainer, MyImage, PhoneHeaderTitle, PhoneHeaderTitleWrapper } from './Hero.styled';
import image from '../../data/images/eric-222.jpg';


const Hero = () => (
  <HeroWrapper>
    <MyImageContainer>
      <div>
        <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
        <SubHeaderTitle>Theatre Artist & Film Actor</SubHeaderTitle>
        <MyButton onClick={() => { navigate('/resume'); }} variant="outlined" size="large">Resume</MyButton>
        <MyButton onClick={() => { navigate('/demo-reel'); }} variant="outlined" size="large">Demo Reel</MyButton>
        <MyButton onClick={() => { navigate('/photographs'); }} variant="outlined" size="large">HeadShots</MyButton>
      </div>
      <PhoneHeaderTitleWrapper>
        <MyImage src={image} alt="Eric Ryan Swans Headshot" />
        <PhoneHeaderTitle>Eric Ryan Swanson</PhoneHeaderTitle>
      </PhoneHeaderTitleWrapper>
    </MyImageContainer>
  </HeroWrapper>
);

export default Hero;
