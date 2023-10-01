import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4.5rem 2.90625rem 3.48rem 2.90625rem;

  grid-row: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.33rem;

  overflow-x: hidden;

  color: #fff;

  @media (min-width: 1024px) {
    padding: 4.69rem;
    gap: 3.66rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 18.75rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.625rem;
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 50rem;
    flex-direction: row;
  }
`;

export const MainPicture = styled.picture`
  > img {
    width: 100%;
    height: 11.75rem;
    border-radius: 0.625rem;
    object-fit: cover;

    @media (min-width: 1024px) {
      width: 25rem;
      height: 100%;
    }
  }
`;

export const MainContent = styled.section`
  padding: 1.7rem 1.56rem 2rem 1.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.19rem;

  @media (min-width: 1024px) {
    padding: 5.06rem 3.15rem 5.8rem 3.15rem;
  }
`;

export const MainContentTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const MainPlanetsList = styled.ul`
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-right: 5px;

  .loading-bar {
    margin-top: 10px;
  }

  &::-webkit-scrollbar {
    width: 7px; /* width of the entire scrollbar */
    border-radius: 0.3125rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.7); /* color of the tracking area */
    border-radius: 0.3125rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #de1212; /* color of the scroll thumb */
    border-radius: calc(0.3125rem - 2px); /* roundness of the scroll thumb */
    border: 2px solid rgba(0, 0, 0, 0.7); /* creates padding around scroll thumb */
  }
`;

export const Spaceship = styled.img`
  max-width: 20.1875rem;
  max-height: 14.3125rem;
  position: absolute;
  z-index: 10;
  top: 1.38rem;
  left: 3.63rem;
  right: 0;

  @media (min-width: 1024px) {
    max-width: 28.875rem;
    max-height: 20.5rem;
    top: 13.44rem;
    left: -6.5rem;
  }
`;
