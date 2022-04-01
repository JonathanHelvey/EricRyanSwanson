import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


const Layout = ({ children }) => (
  <>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme} injectFirst>
        <>
          <GlobalStyles />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
