import { FormEvent } from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";
import { Wrapper } from "./styles";

interface SearchFormProps {
  loading: boolean;
  search: (searchValue: string) => Promise<void>;
}

export function SearchForm({ loading, search }: SearchFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    console.log("passou aqui");
    const form = event.currentTarget;
    const elements = form.elements;

    const inputSearch = elements.namedItem("search") as HTMLInputElement;
    const searchValue = inputSearch.value;

    await search(searchValue);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <SearchInput />
      <SearchButton loading={loading} />
    </Wrapper>
  );
}
