/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import img from '../../data/images/EricBanner2.jpg';

export const FormWrapper = styled.div`
  form {
   text-align: center;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 11vw;
  height: 25vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryLightDark};
  background: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;
