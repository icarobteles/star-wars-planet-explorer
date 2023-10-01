import styled, { css } from "styled-components";
import OrderIconSvg from "/icons/order-icon-desc.svg";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.31rem;

  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface OrderIconProps {
  order: "asc" | "desc";
}

export const OrderIcon = styled.i<OrderIconProps>`
  width: 0.30544rem;
  height: 0.4375rem;
  background-image: url(${OrderIconSvg});

  ${props =>
    props.order === "asc" &&
    css`
      transform: rotate(180deg);
    `}
`;
