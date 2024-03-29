import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  width: 100vw;
  height: auto;
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryBlack};
  height: 100vh;
  width: 30vw;
  text-align: left;
  position: fixed;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 8;

  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100vw;
    height: 105vh;
  }
  h1, h2 {
    color: ${({ theme }) => theme.primaryLight};
    text-align: center;
  }

  a {
    text-align: center;
    padding: 1.3rem 0;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryLightDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile.md}) {
      font-size: 1rem;
      text-align: center;
      padding: .4rem 0;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 1em;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2em;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  -webkit-backface-visibility: hidden;

  &:focus {
    outline: none;
  }

  div {
    width: 2em;
    height: 0.25em;
    background: ${({ theme, open }) => (open ? theme.primaryLight : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: ${({ theme }) => theme.mobile.md}) {
    height: 0.2rem;
  }

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.md}) {
    top: 0;
    left: 1em;
    margin-top: 4vh;
  }
`;
