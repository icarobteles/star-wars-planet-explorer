import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4.5rem 1.1875rem 2.25rem 1.1875rem;

  grid-row: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.33rem;

  overflow-x: hidden;

  @media (min-width: 1024px) {
    padding: 4.56rem 1.1875rem 4.94 1.1875rem;
    gap: 3.66rem;
  }
`;
