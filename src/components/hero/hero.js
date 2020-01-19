import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { HeroWrapper, Header1 } from './Hero.styled';
import Carousel from '../Carousel';

const Hero = ({ siteTitle }) => {
console.log('--->: siteTitle', siteTitle)

//   const data = useStaticQuery(graphql`
//   query {
//   ericBanner1: file(relativePath: { eq: "EricBanner1.jpg"}) {
//     childImageSharp {
//         fixed (width: 2200, height: 600) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `);
  return (
    <HeroWrapper>
      <Carousel />
      <Header1 style={{ color: 'black' }}>{siteTitle}Eric Ryan Swanson</Header1>
    </HeroWrapper>
  );
};

export default Hero;
