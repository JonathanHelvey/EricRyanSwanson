import React, { useState, useRef } from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'gatsby';

import { useOnClickOutside } from '../hooks/ClickOutside';
import { StyledMenu, StyledBurger, NavigationWrapper } from './Navigation.styled';
import { Header2 } from '../../themes/theme';
import SocialMediaIcons from '../SocialMediaIcons';

import { CopyWrightDiv } from '../Footer/Footer.styled';


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
    <Link to="/#" onClick={() => setOpen(!open)}>Home</Link>
    <Link to="/photographs">Headshots & Photo's</Link>
    <Link to="/demo-reel">Demo-Reel</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/contact">Contact</Link>
    <SocialMediaIcons />
    <CopyWrightDiv>
      <span aria-label="Copyright" role="img"> ©️ </span>
      Copywright Eric Ryan Swanson 2022
    </CopyWrightDiv>
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
