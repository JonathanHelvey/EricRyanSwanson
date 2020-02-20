import styled from 'styled-components';

export const buttonWrapper = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ResumeWrapper = styled.div`
  height: auto;
  position: relative;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryDark};
  object {
    height: 100vh;
    width: 100%;
  }
`;
