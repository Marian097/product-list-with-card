import Products from "./Products";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType"


type ProdProps = {
  products: Prod[],
  cart: CartType[],
  isNothingInCart: boolean,
  addToCart: (products: Prod) => void,
};

export default function Menu({products, addToCart,isNothingInCart, }: ProdProps) {
  return (
    <div>
      <div className = "flex md:ml-20 md:pt-20 md:pb-10">
        <h1 className = "font-bold md:text-4xl ">Desserts</h1>
      </div>
      <div className = "flex md:ml-20">
        <Products products={products} addToCart = {addToCart}  isNothingInCart = {isNothingInCart}/>
      </div>
    </div>
  );
}
