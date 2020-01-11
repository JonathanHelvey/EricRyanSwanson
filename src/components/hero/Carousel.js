import React from 'react';

import { StyledCarousel } from './Carousel.styled';

const Carousel = () => (
  <StyledCarousel>
    <div>
      <img
        src={require('../../data/images/EricBanner1.jpg')}
        alt="EricRyanSwanson"
      />
    </div>
  </StyledCarousel>
);

Carousel.defaultProps = {
  siteTitle: '',
};

export default Carousel;
