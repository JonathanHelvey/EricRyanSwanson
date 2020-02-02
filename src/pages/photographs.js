import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const photographs = () => (
  <Layout>
    <SEO title="Eric Swanson Photographs" />
    <div>PHOTOGRAPHS</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default photographs;
