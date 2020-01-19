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
  primaryLightDark: '#557a95',
  primaryLight: '#fbfbfb',
  primaryHover: '#b1a296',
  mobile: '576px',
});

export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 20vw;
  height: 20vh;
`;
