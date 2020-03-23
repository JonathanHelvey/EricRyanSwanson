import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ height: '70vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10vh', fontSize: '40px' }}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>404: NOT FOUND</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('../data/images/sad.gif')} alt="sad" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Please Click Another Link</p>
      </div>
    </div>

  </Layout>
);

export default NotFoundPage;
