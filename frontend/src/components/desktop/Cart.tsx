import type { CartType } from "@/types/CartType";
import carbonNeutral from "@/assets/images/icon-carbon-neutral.svg"

type Props = {
  cart: CartType[];
  total: number;
};
export default function Cart({ cart, total }: Props) {
  return (
    <>
      {cart.map((item) => (
        <div key = {item.id}>
          <h2>Your Cart ({cart.length})</h2>
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <span>{item.quantity}x</span>
            <span>@${item.price}</span>
            <span>${item.subtotal}</span>
            <span><button>x</button></span>
          </div>
          <div>
            <span>Oreder Total</span>
            <span>${total}</span>
          </div>
          <div>
            <p>
              <img src = {carbonNeutral} />
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
