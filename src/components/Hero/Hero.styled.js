import styled from 'styled-components';
import { Button } from '@material-ui/core';
import image from '../../data/images/grey-gradiant.webp';
import headshot from '../../data/images/eric-222.jpg';

export const HeroWrapper = styled.div`
  /* background-image: url(${image}); */
  background: linear-gradient(166deg, rgba(47,51,54,1) 38%, rgba(10,28,26,1) 59%);
  display: flex;
  justify-content: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: auto;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    justify-content: flex-end;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    background-image: flex-end;
  };
`;

export const SocialIconWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: ${({ theme }) => theme.mobile.md}) {
      display: none;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;

export const MyButton = styled(Button)`
  background-color: #333333;
  color: #ffffff;
  margin: 5px; 
  /* @media (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none;
  }; */
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;

// export const Headshot = styled.div` 
//   @media (max-width: ${({ theme }) => theme.mobile.sm}) {
//     display: none;
//   };
// `;

export const MyImage = styled.img` 
  height: 800px;
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    height: 600px;
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    height: 600px;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: auto;
  };
`;

export const SiteHeaderTitle = styled.h1`
  margin-top: 30vh;
  margin-right: 20vh;
  font-size: 5vh;
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    margin-top: 15vh;
    margin-left: 20px
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
    font-size: none;
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    margin-left: 6vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;
