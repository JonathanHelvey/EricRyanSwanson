/* eslint-disable react/no-danger */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import {
  NewsBox,
  Wrapper,
  ScrollDiv,
  ImageWrapper,
  NewsHeadlineStyle,
  NewsDateStyle,
  NewsCard,
} from './ArtistBio.styled';
import {
  Section1,
  Header1,
  Header2,
  theme,
  StyledGrid,
} from '../../themes/theme';

const useStyles = makeStyles({
  card: {
    minWidth: 50,
    margin: 10,
    backgroundColor: theme.primaryLight,
  },
  title: {
    fontSize: 14,
  },
});

const ArtistBio = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
  query {
    newsQuery: allMarkdownRemark (
      sort: {fields: frontmatter___priority} , 
      filter: {fileAbsolutePath: {regex: "/News/i"}}
    ) {
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
    swanLogo: file(relativePath: { eq: "swanlogo2.png" }) {
      childImageSharp {
        fixed (width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  return (
    <Section1>
      <Grid container spacing={3}>
        <StyledGrid item xs={8}>
          <Header1 id="ArtistBio">Artist Bio</Header1>
          <p>
            I feel it is my job as an
            <strong> actor </strong>
            to discover a character’s soul and portray it externally with great ease and normality.
            As an actor, I’m most attracted to characters with complicated psyches and darker desires.
            I am a physical actor. I investigate and construct characters through physicalities, discovering and creating an external connection before moving to internal exploration.
            Animating those connections and breathing physical life into characters drives me as an actor and grounds my performances.
            I am a huge game show fanatic. My favorites are The Price is Right, Wheel of Fortune, and Let’s Make a Deal.
            I have worked as an architectural metal re finisher, barista, standardized patient, segway tour guide, manager of operations, admin, dog walker and personal assistant.
            <br />
            <br />
            <i> * I was born and raised in Chicago, IL and currently reside in Manhattan. *</i>
          </p>
          <ImageWrapper>
            <Img
              fixed={data.swanLogo.childImageSharp.fixed}
              alt="Swan Logo"
            />
          </ImageWrapper>
        </StyledGrid>
        <StyledGrid item xs={4}>
          <Header2>Latest News</Header2>
          <NewsBox>
            <Wrapper>
              <ScrollDiv>
                {data.newsQuery.nodes.map(({ frontmatter, id, html }) => (
                  <NewsCard key={`key=${id}`}>
                    <Card className={classes.card}>
                      <CardContent className={classes.title}>
                        <NewsHeadlineStyle>{frontmatter.title}</NewsHeadlineStyle>
                        <NewsDateStyle>{frontmatter.date}</NewsDateStyle>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                      </CardContent>
                    </Card>
                  </NewsCard>
                ))}
              </ScrollDiv>
            </Wrapper>
          </NewsBox>
        </StyledGrid>
      </Grid>
    </Section1>
  );
};


export default ArtistBio;
