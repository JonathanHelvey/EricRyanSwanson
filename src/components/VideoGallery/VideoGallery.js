import React from 'react';

import { Section1 } from '../../themes/theme';
import reel from '../../data/assets/EricSwansonReel.mp4';
import artLessonClip from '../../data/assets/EricRyanSwanson_TheArtLesson.mp4';
import { Video } from './VideoGallery.styled';

const VideoGallery = () => (
  <Section1>
    <h3>Demo Reel</h3>
    <Video controls>
      <source src={reel} type="video/mp4" />
      <source src={reel} type="video/ogg" />
      <track kind="captions" srcLang="en" />
      Your browser does not support HTML5 video.
    </Video>
    <h3>Art Lesson</h3>
    <p>Directed by Leo Curbelo</p>
    <p>Watch Now on amazon Prime</p>
    <Video controls>
      <source src={artLessonClip} type="video/mp4" />
      <source src={artLessonClip} type="video/ogg" />
      <track kind="captions" srcLang="en" />
      Your browser does not support HTML5 video.
    </Video>
    <h4 style={{ paddingTop: '20px' }}>Watch at</h4>
    <a style={{ color: '#FF9900', fontSize: '14px', padding: '0 5px 0 5px' }} href="https://www.amazon.com/Art-Lesson-Mateo-G%C3%B3mez/dp/B08LPYRYB9/ref=pd_ybh_a_1?_encoding=UTF8&psc=1&refRID=QGDBFNJYS54FC2BFV51M">
      https://www.amazon.com/Art-Lesson-Mateo
    </a>
  </Section1>

);

export default VideoGallery;
