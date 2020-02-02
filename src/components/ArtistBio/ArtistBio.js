import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {
  Box,
  Wrapper,
  ScrollDiv,
  StyledGrid,
  ImageWrapper,
  NewsHeadlineStyle,
  NewsDateStyle,
  GridWrapper,
} from './ArtistBio.styled';
import { Section1, Header1 } from '../../themes/theme';

const useStyles = makeStyles({
  card: {
    minWidth: 50,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
});

const ArtistBio = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
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
    swanLogo: file(relativePath: { eq: "swanlogo2.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  return (
    <Section1>
      <GridWrapper container spacing={3}>
        <StyledGrid item xs={6}>
          <Header1>Artist Bio</Header1>
          <p>
            I feel it is my job as an actor to discover a character’s soul and portray it externally with great ease and normality.
            As an actor, I’m most attracted to characters with complicated psyches and darker desires.
            I am a physical actor. I investigate and construct characters through physicalities, discovering and creating an external connection before moving to internal exploration.
            Animating those connections and breathing physical life into characters drives me as an actor and grounds my performances.
            I am a huge game show fanatic. My favorites are The Price is Right, Wheel of Fortune, and Let’s Make a Deal.
            I have worked as an architectural metal re finisher, barista, standardized patient, segway tour guide, manager of operations, admin, dog walker and personal assistant.
            **I was born and raised in Chicago, IL and currently reside in Manhattan.
          </p>
          <ImageWrapper>
            <Img
              fixed={data.swanLogo.childImageSharp.fixed}
              alt="Swan Logo"
            />
          </ImageWrapper>
        </StyledGrid>
        <StyledGrid item xs={6}>
          <h2>Latest News</h2>
          <Box>
            <Wrapper>
              <ScrollDiv>
                {data.newsQuery.nodes.map(({ frontmatter, id, html }) => (
                  <div key={`key=${id}`}>
                    <Card className={classes.card}>
                      <CardContent className={classes.title}>
                        <NewsHeadlineStyle>{frontmatter.title}</NewsHeadlineStyle>
                        <NewsDateStyle>{frontmatter.date}</NewsDateStyle>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </ScrollDiv>
            </Wrapper>
          </Box>
        </StyledGrid>
      </GridWrapper>
    </Section1>
  );
};


export default ArtistBio;
