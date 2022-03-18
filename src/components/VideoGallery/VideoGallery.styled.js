/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Video = styled.video`
  width: 60%;
  height:"auto";
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    width: 100%;
  };
`;
