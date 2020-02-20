import React from 'react';

import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import { CarouselWrapper } from '../components/Carousel/Carousel.styled';

import { Header1, SectionHeader } from '../themes/theme';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// Headshots and Videos and Carousel.
const Photographs = () => (
  <Layout>
    <SEO title="Eric Swanson Photographs" />
    <SectionHeader Third alignContent="flex-end">
      <div>
        <Header1 Right lg>Photographs &</Header1>
      </div>
      <div>
        <Header1 Right lg>Videos</Header1>
      </div>
    </SectionHeader>
    <PhotoGallery />
    <VideoGallery />
    <CarouselWrapper>
      <Carousel />
    </CarouselWrapper>
  </Layout>
);

export default Photographs;
