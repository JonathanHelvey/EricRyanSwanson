
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navigation siteTitle={data.site.siteMetadata.title} />
          <Hero />
          <div>
            <main>{children}</main>
            <footer />
          </div>
        </>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
