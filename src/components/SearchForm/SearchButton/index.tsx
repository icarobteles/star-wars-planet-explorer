import { Wrapper } from "./styles";

interface SearchButtonProps {
  loading: boolean;
}

export function SearchButton({ loading }: SearchButtonProps) {
  return (
    <Wrapper data-loading={loading} type="submit" title="Search">
      <i></i>
      Search
    </Wrapper>
  );
}
