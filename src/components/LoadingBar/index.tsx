import { Content, Wrapper } from "./styles";

export function LoadingBar() {
  return (
    <Wrapper role="spinner" aria-label="Loading" aria-busy="true">
      <span className="sr-only">Please wait while more data is being processed...</span>
      <Content></Content>
    </Wrapper>
  );
}
