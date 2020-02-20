
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {
  NewsBox,
  Wrapper,
  ScrollDiv,
  NewsHeadlineStyle,
  NewsDateStyle,
  NewsCard,
} from './NewsFeed.styled';
import { Header1, theme } from '../../themes/theme';

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

const NewsFeed = () => {
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
  }
`);
  return (
    <>
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
    </>
  );
};


export default NewsFeed;
