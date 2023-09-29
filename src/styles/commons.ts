import styled from "styled-components";
import LogoImage from "/images/logo.svg";

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;

  @media (min-width: 1024px) {
    gap: 1.06rem;
  }
`;

export const LogoSubtitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 0.65081rem;
  font-weight: 400;
  letter-spacing: 0.10088rem;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 1rem;
    letter-spacing: 0.155rem;
  }
`;

export const LogoTitle = styled.h1`
  width: 13.07894rem;
  height: 5.83313rem;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    width: 20.09688rem;
    height: 8.96313rem;
  }
`;
