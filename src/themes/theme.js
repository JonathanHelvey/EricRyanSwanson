/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

// theme.js
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  primaryDark: '#212629',
  primaryLightDark: '#798797',
  primaryLight: '#fbfbfb',
  primaryPurple: '#550a46',
  primaryGreen: '#819C8D',
  primaryHover: '#b1a296',
  mobile: {
    xs: '576px',
    sm: '766px',
    md: '1020px',
    lg: '1200px',
    xl: '1500px',
  },
});

export const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vw;
  height: 90vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryHover};
`;

export const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vw;
  height: auto;
  width: auto;
  background-color: ${({ theme }) => theme.primaryLightDark};
`;

export const Header1 = styled.h1`
  font-weight: bolder;
  font-size: 60px;
  color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 32px;
  }
`;

export const Header2 = styled.h2`
  font-weight: bolder;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryDark};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 26px;
  }
`;

export const Header3 = styled.h1`
  font-weight: bolder;
  font-size: 24px;
  color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 20px;
  }
`;
