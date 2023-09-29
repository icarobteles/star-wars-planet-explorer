import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #f1f1f1;

  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.31rem;
  padding-bottom: 0.81rem;
  border-bottom: 0.0625rem solid #909090;
`;

interface HeaderIconProps {
  iconUrl: string;
}

export const HeaderIcon = styled.i<HeaderIconProps>`
  width: 0.94006rem;
  height: 0.94rem;
  background-image: url(${props => props.iconUrl});
`;

export const HeaderTitle = styled.h3`
  font-weight: 700;
`;

export const Content = styled.p`
  font-weight: 400;
`;
