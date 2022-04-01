import React from 'react';

import VideoGallery from '../components/VideoGallery';

import { Header1, SectionHeader } from '../themes/theme';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Demoreel = () => (
  <Layout>
    <SEO title="Eric Swanson Demo-Reel" />
    <SectionHeader Secondary alignContent="flex-end">
      <div>
        <Header1 Right lg>Demo-Reel</Header1>
      </div>
    </SectionHeader>
    <VideoGallery />
  </Layout>
);

export default Demoreel;
