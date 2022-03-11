import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import { Section1 } from '../../themes/theme';
import { StyledImg } from './PhotoGallery.styled';

const Photographs = () => {
  const data = useStaticQuery(graphql`
  query {
    ericPhoto0: file(relativePath: { eq: "eric-222.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto1: file(relativePath: { eq: "Eric-164.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto2: file(relativePath: { eq: "eric-168.jpg" }) {
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
    ericPhoto4: file(relativePath: { eq: "eric-213.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto5: file(relativePath: { eq: "eric-258.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto6: file(relativePath: { eq: "eric-230.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto7: file(relativePath: { eq: "eric-137.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ericPhoto8: file(relativePath: { eq: "eric-227.jpg" }) {
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
      <Section1>
        <Grid container spacing={1}>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto0.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto1.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto2.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto3.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto4.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto5.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto6.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto7.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={4} align="center">
            <StyledImg
              fluid={data.ericPhoto8.childImageSharp.fluid}
            />
          </Grid>
        </Grid>
      </Section1>
    </>
  );
};

export default Photographs;
