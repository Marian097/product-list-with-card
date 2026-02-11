import type { CartType } from "@/types/CartType";
import carbonNeutral from "@/assets/images/icon-carbon-neutral.svg";
import ContentCart from "@/components/desktop/ContentCart";

type Props = {
  cart: CartType[];
  total: number;
  length: number;
  isNothingInCart: boolean;
  handleDeleteToCart: (id: string) => void;
};
export default function Cart({
  cart,
  total,
  length,
  isNothingInCart,
  handleDeleteToCart,
}: Props) {
  return (
    <div>
      <div className="flex h-full w-full flex-col  bg-black/40 rounded-md">
        <div className="py-4 pl-5">
          <h2 className="sm:text-xl text-xs font-bold text-red-700">
            Your Cart({length})
          </h2>
        </div>
        {isNothingInCart ? (
          <div className="none">
            <ContentCart cart={cart} handleDeleteToCart={handleDeleteToCart} />
          </div>
        ) : (
          <div className="h-40 overflow-auto">
            <ContentCart cart={cart} handleDeleteToCart={handleDeleteToCart} />
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex">
            <div className="ml-5">
              <span className="text-white font-bold">Order Total:</span>
            </div>
            <div className="ml-auto mr-7">
              {total === 0 ? (
                <>
                  <span className="hidden">{total}</span>
                </>
              ) : (
                <>
                  <span className="flex font-bold text-white">${total}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-wrap py-5">
            <div className="sm:flex hidden gap-x-2 items-center mb-6 bg-red-50 h-10 w-52 rounded-md mx-auto">
              <div>
                <img src={carbonNeutral} alt="" />
              </div>
              <div className="sm:text-sm text-xs">
                <span>
                  This is a<span>carbon-neutral</span>
                  delivery
                </span>
              </div>
            </div>
            <div></div>
            <div className="flex justify-center bg-red-900 h-8 w-20 sm:h-10 sm:w-40 rounded-full mx-auto border-rose-600 border">
              <button className="sm:w-[50px] sm:h-[10px] text-white sm:text-sm text-xs ">
                  Confirm Order
              </button>
            </div>
            <div className="flex justify-center bg-red-900 h-8 w-20 sm:h-10 sm:w-40 rounded-full mx-auto border-rose-600 border mt-2">
              <button className="sm:w-[50px] sm:h-[10px] text-white sm:text-sm text-xs ">
                  Continue Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
