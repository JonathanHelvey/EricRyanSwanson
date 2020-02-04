import React from 'react';

import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactForm />
  </Layout>
);

export default Contact;
