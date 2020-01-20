/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCarousel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryLightDark};
`;
