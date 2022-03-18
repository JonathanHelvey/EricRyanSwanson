import React from 'react';

import { StyledSocialLogoImage, StyledLogoWrapper } from './SocialMediaIcons.styled';

const SocialMediaIcons = () => (
  <StyledLogoWrapper>
    <a
      href="https://www.facebook.com/eric.r.swanson.3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/Facebook.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://twitter.com/ericryanswan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/twitter.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://www.imdb.com/name/nm4805518/?ref_=fn_al_nm_1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSocialLogoImage
        src={require('../../data/social-icons/Imdb.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://www.instagram.com/ericryanswan/"
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
