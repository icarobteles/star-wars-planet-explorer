import styled from "styled-components";
import FiltersIcon from "/icons/filters.svg";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 15rem;
  }
`;

export const Legend = styled.h3`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 900;

  display: flex;
  align-items: center;
  gap: 0.42rem;
`;

export const LegendIcon = styled.i`
  width: 0.95206rem;
  height: 0.953rem;
  background-image: url(${FiltersIcon});
`;
