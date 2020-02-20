import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import {
  SectionHeader,
  Section1,
  Header1,
  Header2,
  StyledGrid,
} from '../../themes/theme';

const PaperReviews = () => {
  const data = useStaticQuery(graphql`
  query {
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
      <SectionHeader Primary>
        <Header1 Right>Reviews</Header1>
      </SectionHeader>
      <Section1 Right>
        <Grid container spacing={1}>
          <StyledGrid item xs={12}>
            {data.reviews.nodes.map((review, idx) => (
              <ul key={`REVIEW${idx}`}>
                <Header2 Left>{review.title}</Header2>
                <p>{review.body}</p>
                <hr />
              </ul>
            ))}
          </StyledGrid>
        </Grid>
      </Section1>
    </>
  );
};

export default PaperReviews;
