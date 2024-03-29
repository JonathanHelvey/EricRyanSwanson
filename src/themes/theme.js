// theme.js
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const theme = createMuiTheme({
  primaryBlack: 'black',
  primaryDark: '#212629',
  primaryLightDark: '#909496',
  primaryLight: '#FFFFFF',
  primaryPurple: '#968BA0',
  primaryGreen: '#819C8D',
  primaryHover: '#CCAD8E',
  mobile: {
    xs: '540px',
    sm: '766px',
    md: '1020px',
    lg: '1600px',
    xl: '1800px',
  },
});

export const Section1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:1vh 4vw 1vh 4vw;
  background-color: ${(props) => (props.Primary ? theme.primaryLightDark : theme.primaryLight)};
  @media (max-width: ${() => theme.mobile.md}) {
    padding-left: 14vw;
    padding-right: 14vw;
  }
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
  height: 40vh;
  width: auto;
  background-color: ${(props) => (props.Primary && theme.primaryLightDark)};
  background-color: ${(props) => (props.Secondary && theme.primaryGreen)};
  background-color: ${(props) => (props.Third && theme.primaryHover)};
  @media (max-width: ${() => theme.mobile.md}) {
    font-size: 34px;
  };
`;

// Can Fix theser and put h1, h2, h3, h4 together.
export const Header1 = styled.h1`
  font-weight: bolder;
  font-size: ${(props) => (props.lg && '60px')};
  font-size: ${(props) => (props.md && '50px')};
  font-size: ${(props) => (props.sm && '46px')};
  text-align: ${(props) => (props.Center && 'center')};
  text-align: ${(props) => (props.Right && 'right')};
  text-align: ${(props) => (props.Left && 'left')};
  color: ${() => theme.primaryBlack};
  @media (max-width: ${() => theme.mobile.md}) {
    font-size: 34px;
  };
`;

export const Header2 = styled.h2`
  font-weight: bolder;
  font-style: ${(props) => (props.italic ? 'italic' : 'none')};
  font-size: ${(props) => (props.lg && '42px')};
  font-size: ${(props) => (props.md && '32px')};
  font-size: ${(props) => (props.sm && '22px')};
  color: ${() => theme.primaryDark};
  text-align: ${(props) => (props.Center && 'center')};
  text-align: ${(props) => (props.Right && 'right')};
  text-align: ${(props) => (props.Left && 'left')};
  @media (max-width: ${() => theme.mobile.md}) {
    font-size: 24px;
  };
`;

export const StyledGrid = styled(Grid)`
  align-self: center;
  @media (max-width: ${() => theme.mobile.md}) {
    max-width: 100%;
    flex-basis: 100%;
  };
`;
