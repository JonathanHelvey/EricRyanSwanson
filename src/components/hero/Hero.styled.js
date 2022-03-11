import styled from 'styled-components';
import image from '../../data/images/wood-panel.jpeg';
import headshot from '../../data/images/Eric-222.jpg';

export const HeroWrapper = styled.div`
  background-image: url(${image});
  display: flex;
  justify-content: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 108.5vh;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    background-attachment:scroll
    background-image: url(${headshot});
    height: auto;
  };
`;

export const titleWrapper = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px; */
`;

export const SiteHeaderTitle = styled.h1`
  /* display: flex;
  justify-content: flex-start; */
  margin-top: 50vh;
  margin-right: 40vh;
  font-size: 5vh;
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.xl}) {
    font-size: 3vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 2vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;

export const SubHeaderTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-left: 20vh;
  font-size: 2.5vh;
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.xl}) {
    font-size: 2vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;
