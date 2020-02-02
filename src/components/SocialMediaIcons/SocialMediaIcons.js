/* eslint-disable react/no-array-index-key */
import React from 'react';

import { StyledSocialLogos } from './SocialMediaIcons.styled';

const SocialMediaIcons = () => (
  <StyledSocialLogos>
    <a
      href="https://www.linkedin.com/in/jonathanhelvey/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../../data/social-icons/linkedin-logo.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../../data/social-icons/Facebook.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://twitter.com/JonathanHelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../../data/social-icons/twitter.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://medium.com/@jonathanhelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../../data/social-icons/medium.png')}
        alt="social-sites"
      />
    </a>
  </StyledSocialLogos>
);


export default SocialMediaIcons;
