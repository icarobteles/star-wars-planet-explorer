import styled from "styled-components";
import SearchIcon from "/icons/search.svg";

export const Wrapper = styled.button`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  transition: background-color ease 0.2s;
  border-radius: 0.3125rem;
  background-color: #de1212;

  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;

  > i {
    width: 1.125rem;
    height: 1.125rem;
    background-image: url(${SearchIcon});
  }

  &:hover {
    background-color: rgba(150, 18, 18, 1);
  }
`;
