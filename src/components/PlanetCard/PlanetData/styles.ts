import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 0.41rem;
`;

export const Image = styled.img`
  width: 5.15056rem;
  height: 5.15056rem;
  object-fit: contain;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2.38rem;
  }
`;

export const PlanetName = styled.h2`
  padding-top: 0.62rem;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  > strong {
    display: block;
    font-size: 1.125rem;
    font-weight: 900;
    text-transform: uppercase;
  }
`;
