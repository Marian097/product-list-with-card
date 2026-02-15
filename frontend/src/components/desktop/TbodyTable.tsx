import type { CartType } from "@/types/CartType";

type Props = {
  cart: CartType[];
};

export default function TbodyTable({ cart }: Props) {
  return (
    <tbody>
      <tr>
        {cart.map((p) => (
          <div className = "grid grid-cols-4 gap-4">
            <div className= "col-span-2">
              <td>{p.name}</td>
            </div>
            <div>
              <td>{p.quantity}x</td>
            </div>
            <div>
              <td>{p.subtotal}$</td>
            </div>
          </div>
        ))}
      </tr>
    </tbody>
  );
}
