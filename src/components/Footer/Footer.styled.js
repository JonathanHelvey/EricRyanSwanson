import styled from 'styled-components';

export const SectionFooter = styled.div`
  height: 50vh;
  margin: -10;
  padding: 0;
  background-color: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    height: auto; 
  };
`;

export const Wrapper = styled.div`   
  display: flex;
  justify-content: flex-end;
  margin-right: 15vw;
  margin-top:5vh;
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    justify-content: center;
    margin-right: 0;
    margin-top: 0;  
  };
  @media (max-width: ${({ theme }) => theme.mobile.xs}) {
    justify-content: center;
    margin-right: 0;
    margin-top:50px;  
  };
`;

export const SiteTitle = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  /* margin-left: 10vw; */
  font-size: 12px; 
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
`;

export const CopyWrightDiv = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  font-size: 12px; 
  margin-top: 2vh;
  padding-bottom: 2vh;
  display: flex;
  justify-content: center;
`;
