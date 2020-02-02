import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


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
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme} injectFirst>
          <>
            <GlobalStyles />
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer siteTitle={data.site.siteMetadata.title} />
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
