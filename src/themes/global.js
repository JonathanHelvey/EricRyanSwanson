/* eslint-disable import/prefer-default-export */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  div {
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  `;
