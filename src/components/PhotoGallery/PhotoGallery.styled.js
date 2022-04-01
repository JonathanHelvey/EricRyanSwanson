/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)`
  :hover {
    border: solid blue;
    cursor: pointer;
  }
`;

export const PhotoSection1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:14vw;
`;
