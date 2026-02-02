import type { CartType } from "@/types/CartType";
import carbonNeutral from "@/assets/images/icon-carbon-neutral.svg";
import removeIcon from "@/assets/images/icon-remove-item.svg";

type Props = {
  cart: CartType[],
  total: number,
  length:number,
  isNothing: boolean
};
export default function Cart({ cart, total, length, isNothing }: Props) {
  return (
    <div className="pt-20">
      <div className="flex flex-col bg-white max-h-screen w-64 rounded-md ml-6">
        <div className="py-4 pl-5">
          <h2 className="text-xl font-bold text-red-700">
            Your Cart({length})
          </h2>
        </div>
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
                  <button>
                    <span>
                      <img src={removeIcon} alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          <div className="flex">
            <div className="ml-5">
              <span>Order Total:</span>
            </div>
            <div className="ml-auto mr-7">
              {total === 0 ? (
                <>
                  <span className="hidden">{total}</span>
                </>
              ) : (
                <>
                  <span className="flex font-bold">${total}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-wrap py-5">
            <div className = "flex gap-x-2 items-center mb-6 bg-red-50 h-10 w-52 rounded-md mx-auto">
              <div>
                <img src={carbonNeutral} alt="" />
              </div>
              <div className="text-sm">
                <span>
                  This is a<span>carbon-neutral</span>
                  delivery
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-red-900 h-10 w-52 rounded-full mx-auto">
              <div>
                 <button><span className = "text-white">Confirm Order</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
