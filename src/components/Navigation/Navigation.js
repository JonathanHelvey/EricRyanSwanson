import React, { useState, useRef } from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'gatsby';

import { useOnClickOutside } from '../hooks/ClickOutside';
import { StyledMenu, StyledBurger, NavigationWrapper } from './Navigation.styled';
import { Header1 } from '../../themes/theme';


const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <Link to="/#" onClick={() => setOpen(!open)}><Header1>Eric Ryan Swanson</Header1></Link>
    <Link to="/#ArtistBio" onClick={() => setOpen(!open)}>Artist Bio</Link>
    <Link to="/photographs">Videos</Link>
    <Link to="/photographs">Photographs</Link>
    <Link to="/">Resume</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/">Links</Link>
    <Link to="/">Contact</Link>
  </StyledMenu>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <NavigationWrapper ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </NavigationWrapper>
    </div>
  );
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
