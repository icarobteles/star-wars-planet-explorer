import { FormEvent } from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";
import { Wrapper } from "./styles";

export function SearchForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const elements = form.elements;

    const inputSearch = elements.namedItem("search") as HTMLInputElement;
    const search = inputSearch.value;

    console.log({ search });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <SearchInput />
      <SearchButton />
    </Wrapper>
  );
}
