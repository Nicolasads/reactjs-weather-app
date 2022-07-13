import styled from "styled-components";

export const Container = styled.div`
  background: var(--dark);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  animation-duration: 2s;
  animation-name: slideup;

  @keyframes slideup {
    from {
      padding-top: 400px;
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }
`;

export const HomeTitle = styled.h1`
  color: var(--white);
  font-weight: 300;
  font-size: 38px;
  text-transform: uppercase;
`;

export const HomeSubtitle = styled.h4`
  color: var(--white);
  font-weight: lighter;
`;

export const LogoImage = styled.img`
  width: 150px;
  margin-top: 20px;
`;

export const CitiesList = styled.div`
  margin-top: 30px;
`;

export const Button = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  border: none;
  color: var(--white);
  background: transparent;
  font-size: 20px;
  line-height: 20px;
  font-weight: 300;
  margin: 20px;
`;
