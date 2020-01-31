import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HeroWrapper, SiteHeaderTitle, SiteHeaderWrapper } from './Hero.styled';
// import Carousel from '../Carousel';

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "EricBanner1.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div>
      <HeroWrapper>
        <SiteHeaderWrapper>
          <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
        </SiteHeaderWrapper>
      </HeroWrapper>
    </div>
  );
};

export default Hero;
