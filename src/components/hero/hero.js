import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HeroWrapper, SiteHeaderTitle, ImageWrapper } from './Hero.styled';
// import Carousel from '../Carousel';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "swanlogo2.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HeroWrapper>
      <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
    </HeroWrapper>
  );
};

export default Hero;
