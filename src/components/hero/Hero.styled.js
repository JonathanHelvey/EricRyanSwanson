import styled from 'styled-components';
import image from '../../data/images/Eric-164.jpg';

export const HeroWrapper = styled.div`
  background: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 80vh;
  width: auto;
`;

export const SiteHeaderWrapper = styled.h1`
  display: flex;
  justify-content: flex-start;
`;
export const SiteHeaderTitle = styled.h1`
  font-size: 20px;
  margin: 20px;
  margin-top:30vh;
`;
