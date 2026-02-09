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
        <div className="hidden sm:flex items-center gap-x-7 font-bold pr-24 cursor-pointer">
          <div>
            <span className="text-white">About</span>
          </div>
          <div>
            <span className="text-white">Menu</span>
          </div>
          <div>
            <span className="text-white">Gallery</span>
          </div>
          <div>
            <span className="text-white">Blog</span>
          </div>
          <div>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
        <div className = "absolute right-7 top-9">
            <img
              src={addToCart}
              className="sm:w-14 w-10"
              onClick={() => handleOpenCart()}
            />
            {isOpenCart ? (
              <div className = "absolute right-0 top-full mt-3 w-72 max-h-[15vh] overflow-scroll sm:max-h-[70vh]">
                <Cart
                  cart={cart}
                  total={total}
                  length={length}
                  isNothingInCart={isNothingInCart}
                  handleDeleteToCart={handleDeleteToCart}
                />
              </div>
            ) : (
              <div className = "hidden">
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
