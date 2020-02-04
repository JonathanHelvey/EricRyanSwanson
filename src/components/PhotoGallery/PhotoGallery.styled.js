import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

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
