import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import SocialMediaIcons from '../SocialMediaIcons';
import { SectionFooter, Wrapper, SiteTitle } from './Footer.styled';


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
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <Wrapper>
            <SiteTitle>2020 - Eric Ryan Swanson</SiteTitle>
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
    </SectionFooter>
  );
};

export default Footer;
