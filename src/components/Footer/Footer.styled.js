/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const SectionFooter = styled.div`
  height: 20vh;
  margin-bottom: -10px;
  background-color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: 50vh; 
  };
`;

export const Wrapper = styled.div`   
  display: flex;
  justify-content: flex-end;
  margin-right: 10vw;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    justify-content: center;  
  };
`;

export const SiteTitle = styled.p`
  color: ${({ theme }) => theme.primaryLight};
  margin-left: 10vw;
`;
