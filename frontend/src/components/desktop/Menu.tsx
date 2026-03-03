import Products from "./Products";
import type { Prod } from "@/types/Products";
import burger from "@/assets/images/burger.png";
import dessert from "@/assets/images/sweets.png";
import pizza from "@/assets/images/pizza.png";
import grill from "@/assets/images/roast.png";
import garnish from "@/assets/images/cooking_18185543.png";
import drinks from "@/assets/images/soda.png";

type ProdProps = {
  products: Prod[];
  isNothingInCart: boolean;
  isDrinks: boolean;
  rated: number;
  setRated: (rating:number) => void;
  addToCart: (products: Prod) => void;
  setOption: (option: string) => void;
};

export default function Menu({
  products,
  isNothingInCart,
  isDrinks,
  rated,
  setRated,
  addToCart,
  setOption,
}: ProdProps) {
  return (
    <div className="w-full py-40">
      <div className="flex flex-wrap justify-center gap-4 py-10 cursor-pointer text-sm lg:text-lg">
        <div className="flex">
          <div>
            <img src={dessert} alt="" className = "w-[6vw] min-w-[28px] max-w-[70px] object-contain"/>
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("desserts")}
            >
              Desserts
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={burger} alt="" className="w-[6vw] min-w-[28px] max-w-[70px] object-contain" />
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("burgers")}
            >
              Burgers
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={pizza} alt="" className="w-[6vw] min-w-[28px] max-w-[70px] object-contain" />
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("pizza")}
            >
              Pizza
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={grill} alt="" className="w-[6vw] min-w-[28px] max-w-[70px] object-contain" />
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("grill")}
            >
              Grill
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={garnish} alt="" className="w-[6vw] min-w-[28px] max-w-[70px] object-contain" />
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("garnish")}
            >
              Garnish
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={drinks} alt="" className="w-[6vw] min-w-[28px] max-w-[70px] object-contain" />
          </div>
          <div>
            <button
              className="font-bold md:text-4xl hover:underline underline-offset-8  text-white"
              onClick={() => setOption("drinks")}
            >
              Drinks
            </button>
          </div>
        </div>
      </div>
      <Products
        rated = {rated}
        setRated = {setRated}
        products={products}
        addToCart={addToCart}
        isNothingInCart={isNothingInCart}
        isDrinks={isDrinks}
      />
    </div>
  );
}
