import { useState } from "react";
import { Filter } from "./Filter";
import { Legend, LegendIcon, Wrapper } from "./styles";

type OrderBy = "asc" | "desc";

interface IFilterBy {
  name: OrderBy;
  population: OrderBy;
}

export function Filters() {
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

  return (
    <Wrapper>
      <Legend>
        <LegendIcon />
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
