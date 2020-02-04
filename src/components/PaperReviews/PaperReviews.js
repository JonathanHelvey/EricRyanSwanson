import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

import {
  SectionHeaderRightPurple,
  Section4,
  Header1,
  Header2,
  StyledGrid,
} from '../../themes/theme';

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
    reviews: allReviewFilesJson {
      nodes {
        review
        title
        id
        body
      }
    }
  }
`);
  return (
    <>
      <SectionHeaderRightPurple>
        <Header1>Reviews</Header1>
      </SectionHeaderRightPurple>
      <Section4>
        <Grid container spacing={2}>
          <StyledGrid item xs={4}>
            <Img
              fluid={data.newYork.childImageSharp.fluid}
            />
          </StyledGrid>
          <StyledGrid item xs={8}>
            {data.reviews.nodes.map((review) => (
              <div>
                <Header2>{review.title}</Header2>
                <p>{review.body}</p>
              </div>
            ))}
          </StyledGrid>
        </Grid>
      </Section4>
    </>
  );
};

export default PaperReviews;
