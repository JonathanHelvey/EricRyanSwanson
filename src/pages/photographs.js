import React from 'react';

import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';

import { Header1, SectionHeaderLeftBrown } from '../themes/theme';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// Headshots and Videos and Carousel.
const Photographs = () => (
  <Layout>
    <SEO title="Eric Swanson Photographs" />
    <SectionHeaderLeftBrown>
      <div>
        <Header1 style={{ textAlign: 'right' }}>Photographs &</Header1>
      </div>
      <div>
        <Header1 style={{ textAlign: 'right' }}>Videos</Header1>
      </div>
    </SectionHeaderLeftBrown>
    <VideoGallery />
    <PhotoGallery />
    <Carousel />
  </Layout>
);

export default Photographs;
