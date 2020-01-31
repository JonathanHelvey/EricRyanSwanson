/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: block;
  /* background-color: ${({ theme }) => theme.primaryLight}; */
  /* height: 20vh;
  width: auto; */
`;

export const HeroImage = styled.body`
  background-image: url('../../data/images/EricBanner1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 1400px;
  width: auto;
`;
