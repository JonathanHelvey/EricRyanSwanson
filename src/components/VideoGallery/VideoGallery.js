import React from 'react';

import { Section3 } from '../../themes/theme';
import reel from '../../data/assets/EricSwansonReel.mp4';

const VideoGallery = () => (
  <Section3>
    <video width="50%" height="50%" controls loop autoPlay muted>
      <source src={reel} type="EricSwansonReel/mp4" />
      <source src={reel} type="EricSwansonReel/mp4" />
      <track kind="captions" srcLang="en" />
      Your browser does not support HTML5 video.
    </video>
  </Section3>
);

export default VideoGallery;
