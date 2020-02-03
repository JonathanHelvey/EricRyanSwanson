import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Grid from '@material-ui/core/Grid';
import { Section1, Section2, Header1 } from '../../themes/theme';
import { SectionHeader, StyledGrid, StyledImg } from './PhotoGallery.styled';

const Photographs = () => {
  const data = useStaticQuery(graphql`
  query {
    ericPhoto1: file(relativePath: { eq: "5Headshot2014.JPG" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto2: file(relativePath: { eq: "swanson3add.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto3: file(relativePath: { eq: "Eric-151.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto4: file(relativePath: { eq: "Eric-164.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto5: file(relativePath: { eq: "Eric-222.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto6: file(relativePath: { eq: "EricBanner1.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto7: file(relativePath: { eq: "11Headshot2014.JPG" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto8: file(relativePath: { eq: "7Headshot2014.JPG" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
  console.log('data', data);
  return (
    <>
      <SectionHeader>
        <div>
          <Header1 style={{ textAlign: 'right' }}>Photographs &</Header1>
        </div>
        <div>
          <Header1 style={{ textAlign: 'right' }}>Videos</Header1>
        </div>
      </SectionHeader>
      <Section2>
        <Grid container spacing={4}>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto1.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto2.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto3.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto4.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto5.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto6.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto7.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.ericPhoto8.childImageSharp.fluid}
            />
          </StyledGrid>
        </Grid>
      </Section2>
    </>
  );
};

export default Photographs;
