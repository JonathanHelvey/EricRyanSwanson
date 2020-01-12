import React, { useState, useRef } from 'react';
import PropTypes, { bool, func } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { useOnClickOutside } from '../hooks/ClickOutside';
import { StyledMenu, StyledBurger, NavigationWrapper } from './Navigation.styled';


const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <a href="/">Artist Bio</a>
    <a href="/">Videos</a>
    <a href="/">Photographs</a>
    <a href="/">Resume</a>
    <a href="/">Reviews</a>
    <a href="/">Links</a>
    <a href="/">Contact</a>
  </StyledMenu>
);

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <NavigationWrapper ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <h1>{siteTitle}</h1>
    </NavigationWrapper>
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
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Header;
