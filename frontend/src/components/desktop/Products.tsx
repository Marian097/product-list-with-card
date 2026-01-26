import type { Prod } from "@/types/Products";

type ProductsProp = {
  data: Prod[];
};

export default function Products({ data }: ProductsProp) {
  return (
    <div className = "flex flex-wrap">
      {data.map((p) => (
        <div key={`${p.name}`}>
          <div>
            <img src={p.image.desktop}/>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
          <div>
            <h2>{p.category}</h2>
            <h3>{p.name}</h3>
            <span>
              <span>$</span>
              {p.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
