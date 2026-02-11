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
};

export default function Header({
  cart,
  total,
  length,
  isNothingInCart,
  isOpenCart,
  handleDeleteToCart,
  handleOpenCart,
}: Props) {
  return (
    <div className="relative">
      <header className="absolute flex md:justify-between md:items-center w-full h-36 bg-black/40 backdrop-blur-md">
        <div className="">
          <img src={logo} className="md:h-40 h-28" />
        </div>
        <div className="absolute right-16 sm:right-10 top-9">
          <img
            src={addToCart}
            className="sm:w-14 w-10"
            onClick={() => handleOpenCart()}
          />
          {isOpenCart ? (
            <div className="absolute right-0 top-full mt-3 w-60 max-h-[100vh] overflow-y-scroll sm:overflow-hidden sm:max-h-[70vh] custom-scroll  animate-cart-drop
      origin-top
      z-50">
              <Cart
                cart={cart}
                total={total}
                length={length}
                isNothingInCart={isNothingInCart}
                handleDeleteToCart={handleDeleteToCart}
              />
            </div>
          ) : (
            <div className="hidden">
              <Cart
                cart={cart}
                total={total}
                length={length}
                isNothingInCart={isNothingInCart}
                handleDeleteToCart={handleDeleteToCart}
              />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
