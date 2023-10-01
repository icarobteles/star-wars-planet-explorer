import styled, { keyframes } from "styled-components";

export const ProgressAnimation = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 0 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 3px;
  border-radius: calc(0.3125rem - 2px);
  background-color: #de1212;
  animation: ${ProgressAnimation} 1s infinite;
`;
