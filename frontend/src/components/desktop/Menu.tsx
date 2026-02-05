import Products from "./Products";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType";

type ProdProps = {
  products: Prod[];
  cart: CartType[];
  isNothingInCart: boolean;
  addToCart: (products: Prod) => void;
  setBurgers: () => void;
  setDesserts: () => void;
  setPizza: () => void;
};

export default function Menu({
  products,
  addToCart,
  isNothingInCart,
  setBurgers,
  setDesserts,
  setPizza,
}: ProdProps) {
  return (
    <div>
      <div className="flex md:pt-20 md:pb-10 gap-x-16 cursor-pointer">
        <button className="font-bold md:text-4xl hover:underline underline-offset-8" onClick = {() => setDesserts()}>Desserts</button>
        <button className="font-bold md:text-4xl hover:underline underline-offset-8" onClick = {() => setBurgers()}>Burgers</button>
        <button className="font-bold md:text-4xl hover:underline underline-offset-8" onClick = {() => setPizza()}>Pizza</button>
      </div>

      <Products
        products={products}
        addToCart={addToCart}
        isNothingInCart={isNothingInCart}
      />
    </div>
  );
}
