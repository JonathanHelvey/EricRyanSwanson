/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const buttonWrapper = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ResumeWrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryDark};
  object {
    height: 90vh;
    width: 100%;
  }
`;
