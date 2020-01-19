import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import { HeroWrapper, Header1 } from './Hero.styled';

const Hero = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
  ericBanner1: file(relativePath: { eq: "EricBanner1.jpg"}) {
    childImageSharp {
        fixed (width: 2200, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);
  return (
    <HeroWrapper>
      <Header1 style={{ color: 'black' }}>{siteTitle}</Header1>
      <Img
        fixed={data.ericBanner1.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="This is a picture of my face."
      />
    </HeroWrapper>
  );
};

export default Hero;
