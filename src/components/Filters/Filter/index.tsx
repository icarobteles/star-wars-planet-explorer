import { OrderIcon, Wrapper } from "./styles";

interface FilterProps {
  fieldname: "Name" | "Population";
  order: "asc" | "desc";
  setOrder: () => void;
}

export function Filter({ fieldname, order, setOrder }: FilterProps) {
  return (
    <Wrapper onClick={setOrder} type="button" title={`Filter by ${fieldname}`}>
      <OrderIcon order={order} />
      {fieldname}
    </Wrapper>
  );
}
