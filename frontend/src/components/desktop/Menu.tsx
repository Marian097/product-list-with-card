import Products from "./Products";
import type { Prod } from "@/types/Products";


type ProdProps = {
  products: Prod[];
  isNothingInCart: boolean;
  isDrinks: boolean;
  addToCart: (products: Prod) => void;
  setOption: (option: string) => void;
};

export default function Menu({
  products,
  isNothingInCart,
  isDrinks,
  addToCart,
  setOption,
}: ProdProps) {
  return (
    <div className="w-full py-40">
      <div className="flex justify-center py-16 md:gap-x-7 gap-x-2 cursor-pointer text-sm lg:text-lg">
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("desserts")}
        >
          Desserts
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("burgers")}
        >
          Burgers
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("pizza")}
        >
          Pizza
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("grill")}
        >
          Grill
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("garnish")}
        >
          Garnish
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setOption("drinks")}
        >
          Drinks
        </button>
      </div>
          <Products
            products={products}
            addToCart={addToCart}
            isNothingInCart={isNothingInCart}
            isDrinks={isDrinks}
          />
      </div>
  );
}
