import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  grid-row: 2;

  > p {
    color: #343434;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  > hr {
    width: 0.0625rem;
    height: 2.75rem;
    background-color: #000;
  }

  > p,
  > hr {
    display: none;
  }

  > img {
    width: 3.43994rem;
    height: 1.53419rem;
    object-fit: contain;
  }

  > p,
  > hr {
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
