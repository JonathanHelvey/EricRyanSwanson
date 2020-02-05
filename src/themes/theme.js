/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

// theme.js
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const theme = createMuiTheme({
  primaryBlack: '#222324',
  primaryDark: '#212629',
  primaryLightDark: '#798797',
  primaryLight: '#fbfbfb',
  primaryPurple: '#514F64',
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

export const Section3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vw;
  height: auto;
  width: auto;
  background-color: ${({ theme }) => theme.primaryPurple};
`;

export const Section4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vw;
  height: auto;
  width: auto;
  background-color: ${({ theme }) => theme.primaryDark};
`;

export const SectionHeaderRightPurple = styled.div`
  display: flex;
  padding: 8vw;
  height: 7vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryPurple};
`;

export const SectionHeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 8vw;
  height: 7vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryLightDark};
`;

export const SectionHeaderLeftGreen = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8vw;
  height: 7vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryGreen};
`;

export const SectionHeaderLeftBrown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: column;
  background-attachment: fixed;
  padding: 4vw;
  padding-right: 15vw;
  height: 90vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryHover};
`;

export const Header1 = styled.h1`
  font-weight: bolder;
  font-size: 62px;
  text-shadow: 2px 2px ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 32px;
  }
`;

export const Header2 = styled.h2`
  font-weight: bolder;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryDark};
  text-align: center;
  text-shadow: 2px 2px ${({ theme }) => theme.primaryLightDark};
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

export const Header4 = styled.h1`
  font-weight: bolder;
  font-size: 18px;
  color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 16px;
  }
`;

export const StyledGrid = styled(Grid)`
  align-self: center;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    max-width: 100%;
    flex-basis: 100%;
  };
`;
