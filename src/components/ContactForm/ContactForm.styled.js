import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import img from '../../data/images/EricBanner2.jpg';

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
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    background-attachment:scroll
  };
`;

export const TextFieldStyle = styled(TextField)`
  width: 50vw;
  @media (max-width: ${({ theme }) => theme.mobile.sm}) {
    width: auto;
  }
`;

export const ContactHeader = styled.h1`
  font-weight: bolder;
  font-size: 68px;
  text-align: ${(props) => (props.Center && 'center')};
  text-align: ${(props) => (props.Right && 'right')};
  text-align: ${(props) => (props.Left && 'left')};
  color: ${({ theme }) => theme.primaryBlack};
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none;
  }
`;