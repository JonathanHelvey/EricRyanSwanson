
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
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
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Navigation siteTitle={data.site.siteMetadata.title} />
              <Hero />
              <main>{children}</main>
              <footer />
            </>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
