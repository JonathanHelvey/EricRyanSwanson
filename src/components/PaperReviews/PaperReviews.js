import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

import { SectionHeaderRightPurple, Section4, Header1 } from '../../themes/theme';

const PaperReviews = () => {
  const data = useStaticQuery(graphql`
  query {
    newYork: file(relativePath: { eq: "newsFire.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reviews: file(relativePath: { eq: "newsFire.jpg" }) {
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
      <SectionHeaderRightPurple>
        <Header1>Reviews</Header1>
      </SectionHeaderRightPurple>
      <Section4>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Img
              fluid={data.newYork.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={6}>
            Reviews Go Here!
          </Grid>
        </Grid>
      </Section4>
    </>
  );
};

export default PaperReviews;
