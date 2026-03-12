import { useMemo, useState } from "react";

type Product = { id: number; name: string; price: number; inStock: boolean };

const PRODUCTS: Product[] = [
  { id: 1, name: "keyboard", price: 80, inStock: true },
  { id: 2, name: "Mouse", price: 40, inStock: false },
  { id: 3, name: "Monitor", price: 300, inStock: true },
];

type FilterState = {
  query: string;
  onlyInStock: boolean;
  maxPrice: number | "";
};

function Filters({
  value,
  onChange,
}: {
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const update = <K extends keyof FilterState>(key: K, next: FilterState[K]) => 
    onChange({ ...value, [key]: next });

    return (
      <div>
        <input
          placeholder="Search..."
          value={value.query}
          onChange={(e) => update("query", e.target.value)}
        />
        <label>
          <input
          type="checkbox"
          checked={value.onlyInStock}
          onChange={(e) => update("onlyInStock", e.target.checked)}
          />
          Only in Stock
        </label>
        <input
          type="number"
          placeholder="Max price"
          value={value.maxPrice}
          onChange={(e) => 
            update("maxPrice", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
    );
};

function ProductList({ items }: { items: Product[] }) {
  if (!items.length) return <p>No results.</p>;
  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>
          {p.name} - ${p.price} {p.inStock ? "(In stock)" : "(Out of Stock)"}
        </li>
      ))}
    </ul>
  );
};

export default function Catalog() {
  const [filters, setFilters] = useState<FilterState>({
    query: "",
    onlyInStock: false,
    maxPrice: "",
  });

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.onlyInStock && !p.inStock) return false;
      if (filters.maxPrice !== "" && p.price > filters.maxPrice) return false;
      if (filters.query && !p.name.toLowerCase().includes(filters.query.toLowerCase()))
        return false;
      return true;
  });
  }, [filters]);

  return (
    <div>
      <Filters value={filters} onChange={setFilters} />
      <ProductList items={filtered} />
    </div>
  );
};