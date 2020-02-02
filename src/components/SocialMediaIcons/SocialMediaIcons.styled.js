/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSocialLogoImage = styled.img`
  width: auto;
  height: 4vh;
  margin: 10px;
  :hover{
    opacity: 2;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
