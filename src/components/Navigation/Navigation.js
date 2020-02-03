import React, { useState, useRef } from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'gatsby';

import { useOnClickOutside } from '../hooks/ClickOutside';
import { StyledMenu, StyledBurger, NavigationWrapper } from './Navigation.styled';
import { Header2 } from '../../themes/theme';
import SocialMediaIcons from '../SocialMediaIcons';


const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <Link to="/#" onClick={() => setOpen(!open)}><Header2>Eric Ryan Swanson</Header2></Link>
    <Link to="/#ArtistBio" onClick={() => setOpen(!open)}>Artist Bio</Link>
    <Link to="/photographs">Photographs</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/">Links</Link>
    <Link to="/">Contact</Link>
    <SocialMediaIcons />
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
