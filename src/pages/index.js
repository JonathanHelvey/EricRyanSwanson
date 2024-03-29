import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import ArtistBio from '../components/ArtistBio';
import Hero from '../components/Hero';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* <ArtistBio /> */}
  </Layout>
);

export default IndexPage;
