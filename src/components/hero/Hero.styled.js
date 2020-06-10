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

export const titleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SiteHeaderTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
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

export const SubHeaderTitle = styled.h2`
  display: flex;
  justify-content: flex-end;
  margin: 0;
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
