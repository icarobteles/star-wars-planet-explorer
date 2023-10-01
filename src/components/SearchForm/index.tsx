import { FormEvent, useState } from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";
import { Wrapper } from "./styles";
import { ZodError, z } from "zod";

interface SearchFormProps {
  loading: boolean;
  search: (searchValue: string) => Promise<void>;
}

export function SearchForm({ loading, search }: SearchFormProps) {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (loading) return;

    const form = event.currentTarget;
    const elements = form.elements;

    const inputSearch = elements.namedItem("search") as HTMLInputElement;
    const searchValue = inputSearch.value;

    try {
      const formattedSearchValue = z
        .string()
        .trim()
        .nonempty("The search cannot be empty")
        .parse(searchValue);
      await search(formattedSearchValue);
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        setError(error.issues[0].message);
        inputSearch.focus();
      }
    }
  };

  return (
    <Wrapper role="form" aria-label="Search Form" onSubmit={handleSubmit}>
      <SearchInput />
      {error && (
        <span className="error" aria-label={error}>
          {error}
        </span>
      )}
      <SearchButton loading={loading} />
    </Wrapper>
  );
}
