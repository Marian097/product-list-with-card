import type { Prod } from "@/types/Products";
import IconDecrement from "@/assets/images/icon-decrement-quantity.svg";
import IconIncrement from "@/assets/images/icon-increment-quantity.svg";
import type { CartType } from "@/types/CartType";


type ProductsProp = {
  addToCart: (products: Prod) => void;
  handleDeleteToCart: (cart: Prod) => void;
  cart: CartType[];
};

export default function ButtonActive(
  { handleDeleteToCart, addToCart, cart }: ProductsProp,
) {
  return (
    <div>
      {cart.map((p) => (
        <>
          <div>
            <button className = "bg-red-800">
              <img src={IconDecrement} alt="" onClick = {() => addToCart}/>
              <img src={IconIncrement} alt="" onClick = {() => handleDeleteToCart}/>
            </button>
            {p.quantity}
          </div>
        </>
      ))}
    </div>
  );
}
