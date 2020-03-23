import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ height: '100vh', backgroundColor: '#E9E9E9' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '12vh', fontSize: '24px' }}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>404: NOT FOUND</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('../data/images/sad.gif')} alt="sad" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
        <p>Please Click Another Link</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
