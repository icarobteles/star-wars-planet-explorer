import { Wrapper } from "./styles";

interface SearchButtonProps {
  loading: boolean;
}

export function SearchButton({ loading }: SearchButtonProps) {
  return (
    <Wrapper
      data-loading={loading}
      type="submit"
      title="Search"
      aria-label="Search"
      disabled={loading}
    >
      <i role="img" aria-label="Search Icon"></i>
      Search
    </Wrapper>
  );
}
