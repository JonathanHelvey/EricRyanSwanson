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
      href="https://www.imdb.com/name/nm4805518/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/Imdb.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://www.imdb.com/name/nm4805518/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/instagram.png')}
        alt="social-sites"
      />
    </a>
  </StyledLogoWrapper>
);


export default SocialMediaIcons;
