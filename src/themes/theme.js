/* eslint-disable import/prefer-default-export */

// theme.js
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  primaryDark: '#000000',
  primaryLightDark: '#7395ae',
  primaryLight: '#fbfbfb',
  primaryPurple: '#550a46',
  primaryHover: '#b1a296',
  mobile: '576px',
});

export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  margin: 4vw;
  background-color: ${({ theme }) => theme.primaryLight};
`;