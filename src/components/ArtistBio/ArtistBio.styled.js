import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const StyledGrid = styled(Grid)`
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    max-width: 100%;
    flex-basis: 100%;
  };
`;

export const GridWrapper = styled(Grid)`
  margin: 4vh;
`;

export const ImageWrapper = styled.div`   
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    display: none;    
  };
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  margin-top: 1vh;
  padding: 5% 2vw; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryGreen};
  margin-top: 1vh;
  padding: 5% 20px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
  `;

export const ScrollDiv = styled.div`
  overflow-y: scroll; 
  overflow-x:hidden;
  max-height: 50vh;
`;

export const NewsHeadlineStyle = styled.h4`
  color: ${({ theme }) => theme.primaryHover};
  text-align: center;
`;

export const NewsDateStyle = styled.h6`
  color: ${({ theme }) => theme.primaryLightDark};
  text-align: center;
`;

export const StyledSocialLogos = styled.div`
  width: 5vw;
  height: 5vh;
  margin: 10px;
`;
