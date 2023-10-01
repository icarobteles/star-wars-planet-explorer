import { Wrapper } from "./styles";

export function SearchInput() {
  return (
    <>
      <label className="sr-only" htmlFor="search">
        Enter the name in the planet
      </label>
      <Wrapper
        placeholder="Enter the name in the planet"
        type="text"
        role="search"
        id="search"
        name="search"
        required
        aria-label="Search for a planet by name"
      />
    </>
  );
}
