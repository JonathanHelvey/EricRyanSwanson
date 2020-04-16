import styled from 'styled-components';
import image from '../../data/images/Eric-164.jpg';

export const HeroWrapper = styled.div`
  background: url(${image});
  display: flex;
  justify-content: flex-start;
  background-attachment: fixed;
  margin-top: -10px;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100vh;
  width: auto;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    background-attachment:scroll
  };
`;

export const SiteHeaderTitle = styled.h1`
  margin: 30px;
  margin-top: 50vh;
  margin-left: 8vh;
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
