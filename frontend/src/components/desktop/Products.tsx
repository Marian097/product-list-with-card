import type { Prod } from "@/types/Products";
import Add from "@/assets/images/icon-add-to-cart.svg";

type ProductsProp = {
  products: Prod[];
  isNothingInCart: boolean;
  addToCart: (products: Prod) => void;
};

export default function Products({ products, addToCart }: ProductsProp) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div key={p.id}>
          {/* Image wrapper */}
          <div className="relative pb-8">
            <img
              src={p.image.desktop}
              className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
            />
          </div>

          {/* Button */}
          <div>
            <div className="flex justify-center">
              <button
                className="
                  relative bottom-0 -translate-y-1/2
                  border border-red-900 bg-white rounded-xl

                  px-3 py-1.5
                  sm:px-4 sm:py-2
                  md:px-5 md:py-2.5

                  text-xs sm:text-sm md:text-base
                  min-w-[120px] sm:min-w-[140px]

                  flex items-center justify-center gap-2
                "
                onClick={() => addToCart(p)}
              >
                <span>
                  <img
                    src={Add}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </span>

                <span className="whitespace-nowrap">
                  Add to cart
                </span>
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="pt-2 md:pt-5">
            <span className="opacity-35 text-xs md:text-base">
              {p.category}
            </span>
          </div>

          <div>
            <span className="font-semibold text-xs md:text-base">
              {p.name}
            </span>
          </div>

          <div>
            <span className="text-red-900 text-xs md:text-base">
              ${p.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
