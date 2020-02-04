import React from 'react';

import PaperReviews from '../components/PaperReviews';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <PaperReviews />
  </Layout>
);

export default Reviews;
