/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCarousel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2vw;
  margin-right: 2vw;
  background-color: ${({ theme }) => theme.primaryLightDark};
`;
