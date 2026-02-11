import type { Prod } from "@/types/Products";
import Add from "@/assets/images/icon-add-to-cart.svg";

type ProductsProp = {
  products: Prod[];
  addToCart: (products: Prod) => void;
};

export default function DetailsFood({ products, addToCart }: ProductsProp) {
  return (
    <div className="w-full sm:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto justify-items-center">
      {products.map((p) => (
        <div key={p.id}>
          {/* Image wrapper */}
          {/* Image wrapper with flip */}
          <div className="group [perspective:1000px]">
            <div
              className="
              h-[3/2]
              transition-transform duration-500
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
              "
            >
              {/* FRONT - Image */}
              <div className="[backface-visibility:hidden]">
                <img
                  src={p.image.desktop}
                  alt={p.name}
                  className="w-full aspect-[4/3] max-h-[200px] object-cover rounded-xl"
                />

                <div className="">
                  <span className="opacity-35 text-xs md:text-base text-white">
                    {p.category}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-xs md:text-base text-white">
                    {p.name}
                  </span>
                </div>

                <div>
                  <span className="text-red-900 text-xs md:text-base font-bold">
                    ${p.price}
                  </span>
                </div>
              </div>

              {/* BACK - Content */}
              <div
                className="
                absolute inset-0
                 bg-white rounded-xl
                 flex flex-col items-center justify-center
                 text-center px-4
                 [backface-visibility:hidden]
                 [transform:rotateY(180deg)] mx-auto"
              >
                <h3 className="font-semibold text-sm mb-2">{p.name}</h3>
                <p className="text-xs opacity-70 mb-2">
                  Ingredients:
                  {p.ingredients?.map((i, idx) => (
                    <span key={idx} className="flex flex-col">
                      {i.name}-{i.weight}gr
                    </span>
                  ))}
                </p>
                <div className="flex gap-x-12">
                  <span className="text-sm font-bold text-red-900">
                    Weight: {p.weight} gr
                  </span>
                  <span className="text-sm font-bold text-red-900">
                    Calories: {p.calories}/100gr
                  </span>
                </div>

                {/* Exemplu "ce contine" */}
                <p className="text-xs mt-2 opacity-60">
                  Fresh ingredients, handmade, served hot 🔥
                </p>
              </div>
            </div>
          </div>
          <div className = "flex justify-center">
            <div className="flex justify-center mt-5">
              <button
                className="flex justify-center lg:w-[150px] lg:h-[30px] w-[100px] h-[30px] items-center border bg-white rounded-xl border-red-700"
                onClick={() => addToCart(p)}
              >
                <span>
                  <img src={Add} className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>

                <span className="whitespace-nowrap text-xs">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
