/* eslint-disable react/no-array-index-key */
import React from 'react';

import Resume from '../components/Resume';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
  </Layout>
);

export default ResumePage;
