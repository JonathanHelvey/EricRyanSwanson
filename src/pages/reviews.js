import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Reviews = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Reviews;
