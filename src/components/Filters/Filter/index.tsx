import { OrderIcon, Wrapper } from "./styles";

interface FilterProps {
  fieldname: "Name" | "Population";
  order: "asc" | "desc";
  setOrder: () => void;
}

export function Filter({ fieldname, order, setOrder }: FilterProps) {
  return (
    <Wrapper
      onClick={setOrder}
      type="button"
      title={`Toggle Order Filter by ${fieldname}`}
      aria-label={`Toggle Order Filter by ${fieldname}`}
    >
      <OrderIcon order={order} />
      {fieldname}
    </Wrapper>
  );
}
