import logo from "@/assets/images/logo.png";
import Cart from "@/components/desktop/Cart";
import type { CartType } from "@/types/CartType";
import addToCart from "@/assets/images/shopping-cart.png";

type Props = {
  cart: CartType[];
  total: number;
  length: number;
  isNothingInCart: boolean;
  isOpenCart: boolean;
  handleDeleteToCart: (id: string) => void;
  handleOpenCart: () => void;
  handleConfirmOrder: () => void;
};

export default function Header({
  cart,
  total,
  length,
  isNothingInCart,
  isOpenCart,
  handleDeleteToCart,
  handleOpenCart,
  handleConfirmOrder,
}: Props) {
  return (
    <div className="relative z-20">
      <header className="fixed top-0 left-0 right-0 z-40 flex md:justify-between md:items-center w-full h-24 md:h-36 bg-black/80 backdrop-blur-md">
        <div className="">
          <img src={logo} className="md:h-40 h-20" />
        </div>
        <div className="absolute right-16 sm:right-10 top-9">
          <img
            src={addToCart}
            className="sm:w-14 w-10"
            onClick={() => handleOpenCart()}
          />
          {isOpenCart && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={handleOpenCart}
              />
              <div className="absolute right-4 top-24 md:top-36 w-72 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl animate-cart-drop">
                <Cart
                  cart={cart}
                  total={total}
                  length={length}
                  isNothingInCart={isNothingInCart}
                  handleDeleteToCart={handleDeleteToCart}
                  handleConfirmOrder = {handleConfirmOrder}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
