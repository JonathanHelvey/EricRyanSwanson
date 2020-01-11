/* eslint-disable react/no-array-index-key */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';
import Header from '../Navigation/Navigation';


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
          <Header siteTitle={data.site.siteMetadata.title} />
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
