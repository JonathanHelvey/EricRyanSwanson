import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  width: 100vw;
  margin: 1vh;
  background-color: ${({ theme }) => theme.primaryLightDark};
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.primaryLightDark};
  margin-top: 1vh;
  padding: 5% 2vw; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryLightDark};
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
  max-height: 50vh; d
`;
