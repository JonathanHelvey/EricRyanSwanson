import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

import {
  SectionHeaderRightPurple,
  Section2,
  Header1,
  Header2,
  StyledGrid,
} from '../../themes/theme';
import { ReviewWrapper } from './PaperReviews.styled';

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
      <Section2>
        <Grid container spacing={1}>
          <StyledGrid item xs={12}>
            {data.reviews.nodes.map((review) => (
              <ReviewWrapper>
                <Header2>{review.title}</Header2>
                <p>{review.body}</p>
              </ReviewWrapper>
            ))}
          </StyledGrid>
        </Grid>
      </Section2>
    </>
  );
};

export default PaperReviews;
