import React from 'react';

import { Section1 } from '../../themes/theme';
import reel from '../../data/assets/EricSwansonReel.mp4';
import { Video } from './VideoGallery.styled';

const VideoGallery = () => (
  <Section1>
    <Video controls>
      <source src={reel} type="video/mp4" />
      <source src={reel} type="video/ogg" />
      <track kind="captions" srcLang="en" />
      Your browser does not support HTML5 video.
    </Video>
  </Section1>
);

export default VideoGallery;
