import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 6rem;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none;    
  };
`;

export const NewsBox = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  border-radius: 1rem;
  margin-bottom: 10vh;
  padding: 5% 2vw; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
  
  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-5deg);
  -ms-transform: skewY(-5deg);
  -o-transform: skewY(-5deg);
  transform: skewY(-5deg);
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: .5rem;
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
  overflow-x: hidden;
  max-height: 50vh;
  
`;

export const NewsCard = styled.h4`
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;
  /* font-style: italic; */
  line-height: 1em;
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

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 2em;
  padding-left: 2em; 
`;
