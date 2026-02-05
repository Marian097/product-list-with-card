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
          {/* Image wrapper with flip */}
          <div className="group [perspective:1000px] lg:w-[300px] sm:w-[200px]">
            <div
              className="
              relative aspect-[4/3]
              transition-transform duration-500
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
              "
            >
              {/* FRONT - Image */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src={p.image.desktop}
                  alt={p.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* BACK - Content */}
              <div
                className="
                absolute inset-0
                 bg-white rounded-xl
                 flex flex-col items-center justify-center
                 text-center px-4
                 [backface-visibility:hidden]
                 [transform:rotateY(180deg)]"
              >
                <h3 className="font-semibold text-sm mb-2">{p.name}</h3>

                <p className="text-xs opacity-70 mb-2">
                  Ingredients:{p.ingredients.map((i) => <span className = "flex flex-col">{i.name}-{i.weight}gr</span>)}
                </p>
                <div className = "flex gap-x-12">
                  <span className="text-sm font-bold text-red-900">Weight: {p.weight} gr</span>
                  <span className="text-sm font-bold text-red-900">Calories: {p.calories}/100gr</span>
                </div>
                

                {/* Exemplu "ce contine" */}
                <p className="text-xs mt-2 opacity-60">
                  Fresh ingredients, handmade, served hot 🔥
                </p>
              </div>
            </div>
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
                  <img src={Add} className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>

                <span className="whitespace-nowrap">Add to cart</span>
              </button>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="opacity-35 text-xs md:text-base">
              {p.category}
            </span>
          </div>

          <div>
            <span className="font-semibold text-xs md:text-base">{p.name}</span>
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
