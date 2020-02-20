// theme.js
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const theme = createMuiTheme({
  primaryBlack: 'black',
  primaryDark: '#212629',
  primaryLightDark: '#909496',
  primaryLight: '#E9E9E9',
  primaryPurple: '#968BA0',
  primaryGreen: '#819C8D',
  primaryHover: '#CCAD8E',
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
  flex-direction: column;
  align-items: center;
  padding: 8vw;
  height: 90vh:
  width: auto;
  background-color: ${(props) => (props.Primary ? theme.primaryLightDark : theme.primaryLight)};
`;


export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.Center && 'center')};
  align-items: ${(props) => (props.Right && 'flex-end')};
  align-items: ${(props) => (props.Left && 'flex-start')};
  flex-direction: column;
  background-attachment: fixed;
  padding: 4vw;
  padding-right: 15vw;
  padding-left: 15vw;
  height: 60vh;
  width: auto;
  background-color: ${(props) => (props.Primary && theme.primaryLightDark)};
  background-color: ${(props) => (props.Secondary && theme.primaryGreen)};
  background-color: ${(props) => (props.Third && theme.primaryHover)};
`;

// Can Fix theser and put h1, h2, h3, h4 together.
export const Header1 = styled.h1`
  font-weight: bolder;
  font-size: 68px;
  text-align: ${(props) => (props.Center && 'center')};
  text-align: ${(props) => (props.Right && 'right')};
  text-align: ${(props) => (props.Left && 'left')};
  color: ${() => theme.primaryBlack};
  @media (max-width: ${() => theme.mobile.md}) {
    font-size: 32px;
  }
`;

export const Header2 = styled.h2`
  font-weight: bolder;
  font-size: 42px;
  color: ${() => theme.primaryDark};
  text-align: ${(props) => (props.Center && 'center')};
  text-align: ${(props) => (props.Right && 'right')};
  text-align: ${(props) => (props.Left && 'left')};
  @media (max-width: ${() => theme.mobile.md}) {
    font-size: 28px;
  }
`;

export const StyledGrid = styled(Grid)`
  align-self: center;
  @media (max-width: ${() => theme.mobile.md}) {
    max-width: 100%;
    flex-basis: 100%;
  };
`;
