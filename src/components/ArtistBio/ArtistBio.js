import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Box, Wrapper, ScrollDiv } from './ArtistBio.styled';
import { Section } from '../../themes/theme';

const useStyles = makeStyles({
  card: {
    minWidth: 100,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
});

const ArtistBio = () => {
  const classes = useStyles();
  const newsData = useStaticQuery(graphql`
  query {
    newsQuery: allMarkdownRemark (sort: {fields: frontmatter___priority}) {
      nodes {
        id
        frontmatter {
          title
          priority
          date
          info
        }
        html
      }
    }
  }
`);

  return (
    <Section>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Artist Bio</h1>
          <p>
            I feel it is my job as an actor to discover a character’s soul and portray it externally with great ease and normality.
            As an actor, I’m most attracted to characters with complicated psyches and darker desires.
            I am a physical actor. I investigate and construct characters through physicalities, discovering and creating an external connection before moving to internal exploration.
            Animating those connections and breathing physical life into characters drives me as an actor and grounds my performances.
            I am a huge game show fanatic. My favorites are The Price is Right, Wheel of Fortune, and Let’s Make a Deal.
            I have worked as an architectural metal re finisher, barista, standardized patient, segway tour guide, manager of operations, admin, dog walker and personal assistant.
            **I was born and raised in Chicago, IL and currently reside in Manhattan.
          </p>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Wrapper>
              <ScrollDiv>
                <h2>News Feed</h2>
                {newsData.newsQuery.nodes.map(({ frontmatter, id, html }) => (
                  <div key={`key=${id}`}>
                    <Card className={classes.card}>
                      <CardContent className={classes.title}>
                        <h4>{frontmatter.title}</h4>
                        <h6>{frontmatter.date}</h6>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </ScrollDiv>
            </Wrapper>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};


export default ArtistBio;
