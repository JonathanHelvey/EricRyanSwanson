/* eslint-disable react/no-array-index-key */
import React from 'react';

import { StyledSocialLogoImage, StyledLogoWrapper } from './SocialMediaIcons.styled';

const SocialMediaIcons = () => (
  <StyledLogoWrapper>
    <a
      href="https://www.linkedin.com/in/jonathanhelvey/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/linkedin-logo.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/Facebook.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://twitter.com/JonathanHelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/twitter.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://medium.com/@jonathanhelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/medium.png')}
        alt="social-sites"
      />
    </a>
  </StyledLogoWrapper>
);


export default SocialMediaIcons;
