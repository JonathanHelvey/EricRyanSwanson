import React, { useState, useRef } from 'react';
import PropTypes, { bool, func} from 'prop-types';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../hooks/ClickOutside';
import { GlobalStyles } from '../../themes/global';
import { theme } from '../../themes/theme';

import Carousel from '../hero/Carousel';
import { StyledMenu, StyledBurger } from "./Navigation.styled"


const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Artist Bio</a>
      <a href="/">Videos</a>
      <a href="/">Photographs</a>
      <a href="/">Resume</a>
      <a href="/">Reviews</a>
      <a href="/">Links</a>
      <a href="/">Contact</a>
    </StyledMenu>
  )
}

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <header>
        <div>
          <div ref={node}>
            <Carousel />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <h1>
            <Link to="/" className="siteTitle">
              {siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

Menu.propTypes = {
  open: bool.isRequired,
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Header;
