import styled from 'styled-components';

export const NewsBox = styled.div`
  padding: 5% 2vw; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  /* -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg); */
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryLightDark};
  padding: 5% 20px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  /* -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg); */
  `;

export const ScrollDiv = styled.div`
  overflow-y: scroll; 
  overflow-x: hidden;
  max-height: 50vh;
`;

export const NewsCard = styled.h4`
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;
  font-weight: bold;
`;

export const NewsHeadlineStyle = styled.h4`
  color: ${({ theme }) => theme.primaryPurple};
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
