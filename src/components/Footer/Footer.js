import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';

import SocialMediaIcons from '../SocialMediaIcons';
import { SectionFooter, Wrapper, SiteTitle, CopyWrightDiv } from './Footer.styled';

const Links = [
  <Link to="/#">Home</Link>,
  <Link to="/#ArtistBio">Artist Bio</Link>,
  <Link to="/photographs">Photographs</Link>,
  <Link to="/">Resume</Link>,
  <Link to="/reviews">Reviews</Link>,
  <Link to="/">Contact</Link>,
];

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    swanLogo: file(relativePath: { eq: "swanlogo2.png" }) {
      childImageSharp {
        fixed (width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);
  return (
    <SectionFooter>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4}>
          <Wrapper>
            <SiteTitle>{Links.map((link, index) => <ul key={`ID-${index}`}>{link}</ul>)}</SiteTitle>
          </Wrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialMediaIcons />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Wrapper>
            <Img
              fixed={data.swanLogo.childImageSharp.fixed}
              alt="Swan Logo"
            />
          </Wrapper>
        </Grid>
      </Grid>
      <CopyWrightDiv>
        {' '}
        <span aria-label="Copyright" role="img"> ©️ </span>
        Copywright Eric Ryan Swanson 2022
      </CopyWrightDiv>
    </SectionFooter>
  );
};

export default Footer;
