import React from 'react';

import PhotoGallery from '../components/PhotoGallery';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const photographs = () => (
  <Layout>
    <SEO title="Eric Swanson Photographs" />
    <PhotoGallery />
  </Layout>
);

export default photographs;
