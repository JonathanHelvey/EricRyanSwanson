import React from 'react';

import ResumeFile from '../components/ResumeFile';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeFile />
  </Layout>
);

export default Resume;
