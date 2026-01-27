import type { Prod } from "@/types/Products";
import Add from "@/assets/images/icon-add-to-cart.svg";

type ProductsProp = {
  data: Prod[];
};

export default function Products({ data }: ProductsProp) {
  return (
    <div className="grid md:grid-cols-3 md:gap-4">
      {data.map((p) => (
        <div key={`${p.name}`}>
          <div className="md:w-60">
            <img src={p.image.desktop} className="rounded-lg" />
          </div>
          <div className="flex justify-center">
            <button className="border md:w-36 md:h-9 rounded-3xl md:text-sm">
              <div className="relative">
                <div className="absolute left-3">
                  <img src={Add} alt="" />
                </div>
              </div>
              <span className="my-auto">Add to Cart</span>
            </button>
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
