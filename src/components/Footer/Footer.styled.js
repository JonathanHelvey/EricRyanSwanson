/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const SectionFooter = styled.div`
  height: 30vh;
  margin-bottom: -10px;
  background-color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: auto; 
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

export const SiteTitle = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  margin-left: 10vw;
  font-size: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none; 
  };
`;

export const CopyWrightDiv = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  font-size: 12px; 
  margin-top: 2vh;
  padding-bottom: 2vh;
  display: flex;
  justify-content: center;
`;
