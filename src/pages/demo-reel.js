import React from 'react';

import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import { CarouselWrapper } from '../components/Carousel/Carousel.styled';

import { Header1, SectionHeader } from '../themes/theme';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// Headshots and Videos and Carousel.
const Demoreel = () => (
  <Layout>
    <SEO title="Eric Swanson Photographs" />
    <SectionHeader Secondary alignContent="flex-end">
      <div>
        <Header1 Right lg>Demo-Reel</Header1>
      </div>
    </SectionHeader>
    <VideoGallery />
  </Layout>
);

export default Demoreel;
