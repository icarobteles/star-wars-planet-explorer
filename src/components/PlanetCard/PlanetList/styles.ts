import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface ItemIconProps {
  iconUrl: string;
}

export const ItemIcon = styled.i<ItemIconProps>`
  width: 1.25rem;
  height: 1.25rem;
  background-image: url(${props => props.iconUrl});
`;

export const ItemInfo = styled.p`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  > strong {
    font-weight: 700;
  }
`;
