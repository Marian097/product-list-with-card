import Products from "./Products";
import type { Prod } from "@/types/Products";


type ProdProps = {
  products: Prod[];
  isNothingInCart: boolean;
  isDrinks: boolean;
  addToCart: (products: Prod) => void;
  setBurgers: () => void;
  setDesserts: () => void;
  setPizza: () => void;
  setGarnish: () => void;
  setGrill: () => void;
  setDrinks: () => void;
};

export default function Menu({
  products,
  isNothingInCart,
  isDrinks,
  addToCart,
  setBurgers,
  setDesserts,
  setPizza,
  setGarnish,
  setGrill,
  setDrinks,
}: ProdProps) {
  return (
    <div className="w-full py-40">
      <div className="flex justify-center py-16 md:gap-x-7 gap-x-2 cursor-pointer text-sm lg:text-lg">
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setDesserts()}
        >
          Desserts
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setBurgers()}
        >
          Burgers
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setPizza()}
        >
          Pizza
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setGrill()}
        >
          Grill
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setGarnish()}
        >
          Garnish
        </button>
        <button
          className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
          onClick={() => setDrinks()}
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
