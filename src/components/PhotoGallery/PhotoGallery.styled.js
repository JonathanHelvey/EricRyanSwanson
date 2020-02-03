/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const SectionHeader = styled.div`
display: flex;
justify-content: flex-end;
align-content: center;
flex-direction: column;
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
