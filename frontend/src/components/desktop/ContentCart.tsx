import removeIcon from "@/assets/images/icon-remove-item.svg";
import type { CartType } from "@/types/CartType";

type Props = {
  cart: CartType[],
  handleDeleteToCart: (id: string) => void;
};

export default function ContentCart({cart, handleDeleteToCart,} : Props) {
  return (
    <div>
        {cart.map((items) => (
          <div key={items.id} className="flex flex-col pl-5">
            <div>
              <h3 className="text-md font-bold">{items.name}</h3>
            </div>
            <div className="flex gap-x-2 pb-4">
              <div>
                <span className="text-red-700">{items.quantity}x</span>
              </div>
              <div>
                <span className="text-gray-800 opacity-50">
                  @${items.price}
                </span>
              </div>
              <div>
                <span>${items.subtotal}</span>
              </div>
              <div className="ml-auto">
                <div className="flex justify-center items-center mr-7 h-3 w-3 rounded-full border-2 border-yellow-950/20">
                  <button onClick = {() => handleDeleteToCart(items.id)}>
                    <span>
                      <img src={removeIcon} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
