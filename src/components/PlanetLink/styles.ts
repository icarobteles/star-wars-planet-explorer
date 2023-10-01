import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color ease 0.2s;
  border-radius: 0.3125rem;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(150, 18, 18, 0.5);
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h4 {
      color: #fff;
      font-size: 0.875rem;
      font-weight: 700;
    }

    > i {
      width: 0.95206rem;
      height: 0.953rem;
      background-image: url(/icons/link.svg);
    }
  }
`;
