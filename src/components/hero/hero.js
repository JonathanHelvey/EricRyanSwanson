import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HeroWrapper, HeroImage } from './Hero.styled';
// import Carousel from '../Carousel';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "EricBanner1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log('--->: data', data.file);
  return (
    <div>
      <HeroWrapper>
        <HeroImage />
        {/* <Img
          className="headshot"
          fluid={data.file.childImageSharp.fluid}
          alt=""
        /> */}
        {/* <h1>Eric Ryan Swanson</h1> */}
      </HeroWrapper>
    </div>
  );
};

export default Hero;
