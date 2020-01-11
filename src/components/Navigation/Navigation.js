import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../hooks/ClickOutside';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';
import BurgerMenu from '../burger/Burger';
import Menu from '../menu/Menu';
import Carousel from '../hero/Carousel';

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <header>
            <div>
              <div ref={node}>
                <Carousel />
                <BurgerMenu open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
              <h1>
                <Link to="/" className="siteTitle">
                  {siteTitle}
                </Link>
              </h1>
            </div>
          </header>
        </>
      </ThemeProvider>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
