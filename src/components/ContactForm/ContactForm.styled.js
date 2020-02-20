/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import img from '../../data/images/EricBanner2.jpg';
import TextField from '@material-ui/core/TextField';

export const FormWrapper = styled.div`
  form {
   text-align: center;
  }
`;

export const SectionHeader = styled.div`
  padding: 12vw;
  height: 60vh:
  width: auto;
  background-color: ${({ theme }) => theme.primaryLightDark};
  background: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    padding-right: 36px;
  }
`;

export const Header = styled.h1`
  font-weight: bolder;
  font-size: 62px;
  text-shadow: 2px 2px ${({ theme }) => theme.primaryLightDark};
  color: ${({ theme }) => theme.primaryBlack};
  @media (max-width: ${({ theme }) => theme.mobile.lg}) {
    font-size: 18px;
  }
`;

export const TextFieldStyle = styled(TextField)`
  width: 50vw;
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    width: auto;
  }
`;
