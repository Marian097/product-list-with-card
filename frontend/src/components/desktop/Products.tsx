import type { Prod } from "@/types/Products";
import Add from "@/assets/images/icon-add-to-cart.svg";

type ProductsProp = {
  products: Prod[];
  addToCart: (products: Prod) => void;
};

export default function Products({ products, addToCart }: ProductsProp) {
  return (
    <div className="grid md:grid-cols-3 md:gap-4">
      {products.map((p) => (
        <div key={`${p.id}`} className = "relative">
          <div className="md:w-60">
            <img src={p.image.desktop} className="rounded-lg" />
          </div>
          <div className="absolute md:top-52 md:left-12">
            <button className="border md:w-36 md:h-9 rounded-3xl md:text-sm border-red-600  bg-white">
              <div className="relative">
                <div className="absolute left-3">
                  <img src={Add} alt="" />
                </div>
              </div>
              <span className="my-auto" onClick = {() => addToCart(p)} >Add to Cart</span>
            </button>
          </div>
          <div className = "pt-5">
            <h2 className = "font-light text-gray-600/70">{p.category}</h2>
            <h3 className = "font-bold">{p.name}</h3>
            <span className = "text-red-700">
              <span>$</span>
              {p.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
