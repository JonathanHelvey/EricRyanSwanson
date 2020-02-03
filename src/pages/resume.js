/* eslint-disable react/no-array-index-key */
import React from 'react';

import ResumeFile from '../components/ResumeFile';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeFile />
  </Layout>
);

export default ResumePage;
