import type { CartType } from "@/types/CartType";

type Props = {
  cart: CartType[];
};


export default function TbodyTable({ cart }: Props) {
  return (
    <tbody>
      {cart.map((p) => (
        <tr key={p.id} className="grid grid-cols-4 gap-4">
          <td className="col-span-2">{p.name}</td>
          <td>{p.quantity}x</td>
          <td>{p.subtotal}$</td>
        </tr>
      ))}
    </tbody>
  );
}