import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  a {
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  `;
