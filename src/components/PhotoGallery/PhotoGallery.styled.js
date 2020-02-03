/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

export const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: column;
  background-attachment: fixed;
  padding: 4vw;
  padding-right: 15vw;
  height: 90vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryHover};
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const StyledImg = styled(Img)`
  :hover {
    border: solid blue;
  }
`;
