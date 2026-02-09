import type { Prod } from "@/types/Products";
import Add from "@/assets/images/icon-add-to-cart.svg";

type ProductsProp = {
  products: Prod[];
  addToCart: (products: Prod) => void;
};

export default function DetailsFood({ products, addToCart }: ProductsProp) {
  return (
    <div className="lg:w-2/4 flex flex-wrap justify-center mx-auto gap-10">
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
                  className="[backface-visibility:hidden] lg:w-[320px] md:w-[220px]"
                />
              </div>
              <div>
                <div className="flex justify-center">
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

              {/* Text */}
              <div>
                <span className="opacity-35 text-xs md:text-base text-white">
                  {p.category}
                </span>
              </div>

              <div>
                <span className="font-semibold text-xs md:text-base  text-white">
                  {p.name}
                </span>
              </div>

              <div>
                <span className="text-red-900 text-xs md:text-base font-bold">
                  ${p.price}
                </span>
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
                <div className="flex flex-col gap-x-12">
                  <span className="text-sm font-bold text-red-900">
                    Volume: {p.weight} gr
                  </span>
                  <span className="text-sm font-bold text-red-900">
                    Calories: {p.calories}/100gr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
