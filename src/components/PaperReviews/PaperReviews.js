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

// TODO: FIX STYLES IN THIS FILE?

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
      <SectionHeader Secondary>
        <Header1 Right lg>Reviews</Header1>
      </SectionHeader>
      <Section1 Primary="primaryLightDark">
        <Section1 style={{ padding: '1vh 8vw 1vh 8vw' }}>
          <Grid container spacing={1}>
            <StyledGrid item xs={12}>
              {data.reviews.nodes.map((review, idx) => (
                <ul key={`REVIEW${idx}`}>
                  <Header2 Left md>{review.title}</Header2>
                  <p style={{ fontSize: '25px', fontStyle: 'italic', marginTop: '2vh', textAlign: 'center' }}>
                    <img
                      src={require('../../data/images/quote-marks.png')}
                      alt="quotes"
                      style={{ width: '20px', height: '20px', transform: 'rotate(180deg)' }}
                    />
                    {review.body}
                    <img
                      src={require('../../data/images/quote-marks.png')}
                      alt="quotes"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </p>
                  <hr />
                </ul>
              ))}
            </StyledGrid>
          </Grid>
        </Section1>
      </Section1>
    </>
  );
};

export default PaperReviews;
