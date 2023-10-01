import styled from "styled-components";
import BackIcon from "/icons/back.svg";
import EditIcon from "/icons/edit.svg";

export const Wrapper = styled.main`
  width: 100%;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  background-color: #fff;
  max-width: 30rem;

  position: relative;

  @media (min-width: 1024px) {
    max-width: 37rem;
    padding: 1.62rem 1.5rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  align-self: flex-end;
  position: absolute;
  right: 0;
  bottom: -2.56rem;

  > button,
  > a {
    display: flex;
    align-items: center;
    gap: 0.71rem;
    color: #fff;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: #fff;
    }
  }

  > a > i {
    width: 0.48rem;
    height: 0.6875rem;
    background-image: url(${BackIcon});
  }

  > button > i {
    width: 1rem;
    height: 1rem;
    background-size: cover;
    background-image: url(${EditIcon});
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  padding: 0.75rem 1rem;
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  gap: 1rem;
  border-radius: 0.625rem;
  background-color: #fff;

  @media (min-width: 1024px) {
    padding: 1.62rem 1.5rem;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 2.5rem;

  border-radius: 0.3125rem;
  border: 1px solid #de1212;
  background-color: #fff;

  grid-column: 1 / span 2;
  grid-row: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #000;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #7d7d7d;
  }
`;

interface ModalButtonProps {
  variant: "confirm" | "cancel";
}

export const ModalButton = styled.button<ModalButtonProps>`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  grid-column: ${({ variant }) => (variant === "cancel" ? 1 : 2)};
  grid-row: 2;

  transition: background-color ease 0.2s;
  border-radius: 0.3125rem;
  background-color: ${({ variant }) => (variant === "cancel" ? "#de1212" : "#000")};

  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "cancel" ? "rgba(150, 18, 18, 1)" : "#1a1a1a"};
  }
`;
