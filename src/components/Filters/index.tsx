import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Legend, LegendIcon, Wrapper } from "./styles";

type OrderBy = "asc" | "desc";

interface IFilterBy {
  name: OrderBy;
  population: OrderBy;
}

interface FiltersProps {
  sort: (by: "name" | "population", order: "asc" | "desc") => void;
}

export function Filters({ sort }: FiltersProps) {
  const [filterBy, setFilterBy] = useState<IFilterBy>({
    name: "desc",
    population: "desc",
  });

  const toggleOrderFilter = (fieldname: "name" | "population") => {
    setFilterBy(prevState => {
      return {
        ...prevState,
        [fieldname]: prevState[fieldname] === "asc" ? "desc" : "asc",
      };
    });
  };

  useEffect(() => {
    console.log("oi");
    sort("name", filterBy.name);
  }, [filterBy.name]);

  useEffect(() => {
    sort("population", filterBy.population);
  }, [filterBy.population]);

  return (
    <Wrapper>
      <Legend>
        <LegendIcon role="img" aria-label="Filter Icon" />
        Filter:
      </Legend>
      <Filter fieldname="Name" order={filterBy.name} setOrder={() => toggleOrderFilter("name")} />
      <Filter
        fieldname="Population"
        order={filterBy.population}
        setOrder={() => toggleOrderFilter("population")}
      />
    </Wrapper>
  );
}
