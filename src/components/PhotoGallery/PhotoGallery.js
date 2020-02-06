import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import { Section2 } from '../../themes/theme';
import { StyledGrid, StyledImg } from './PhotoGallery.styled';

const Photographs = () => {
  const data = useStaticQuery(graphql`
  query {
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
  return (
    <>
      <Section2>
        <Grid container spacing={4}>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto3.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto4.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto5.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto6.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto7.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledImg
              fluid={data.ericPhoto8.childImageSharp.fluid}
            />
          </StyledGrid>
        </Grid>
      </Section2>
    </>
  );
};

export default Photographs;
