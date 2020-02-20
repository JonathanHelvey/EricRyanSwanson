import React from 'react';

import { Section1 } from '../../themes/theme';
import reel from '../../data/assets/EricSwansonReel.mp4';

const VideoGallery = () => (
  <Section1>
    <video width="70%" height="50%" controls>
      <source src={reel} type="video/mp4" />
      <source src={reel} type="video/ogg" />
      <track kind="captions" srcLang="en" />
      Your browser does not support HTML5 video.
    </video>
  </Section1>
);

export default VideoGallery;
