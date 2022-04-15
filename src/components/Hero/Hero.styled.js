import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const HeroWrapper = styled.div`
  background: linear-gradient(166deg, rgba(47,51,54,1) 38%, rgba(10,28,26,1) 59%);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 95vh;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    height: 50vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: 50%;
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
  background-color: #FF9900;
  color: #ffffff;
  margin: 60px 40px 0 0;
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    margin-right: 40px
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    margin-right: 20px;
    margin-bottom: 10px;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;

export const Container = styled.div` 
  display: flex;
  justify-content: center;
  /* height: 100vh; */
`;

export const MyImage = styled.img` 
  height: 740px;
  margin-top:3%;
  /* @media (max-width: ${({ theme }) => theme.mobile.xl}) {
    height: 560px;
    margin-top:10%;
  }; */
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    height: 640px;
    margin-top:10%;
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    height: 340px;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: 200px;
  };
  @media (max-width: ${({ theme }) => theme.mobile.xs}) {
    height: auto;
    margin-bottom: -50px;
  };
`;

export const SiteHeaderTitle = styled.h1`
  margin-top: 30vh;
  margin-right: 20vh;
  font-size: 5vh;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    margin-right: 40px
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    margin-top: 10vh;
    margin-left: 10vw;
    padding-bottom:10px;
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
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile.xl}) {
    font-size: none;
  };
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    margin-right: 40px
  };
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    margin-left: 6vh;
  };
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    display: none;
  };
`;

export const PhoneHeaderTitle = styled.h2`
  display:none; 
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
  color: ${({ theme }) => theme.primaryLight};
  };
`;

export const PhoneHeaderTitleWrapper = styled.div`
  margin: .5vh;
`;
