import FormOrder from "@/components/desktop/FormOrder";
import type { CartType } from "@/types/CartType";
import { useEffect } from "react";

type Props = {
  total: number;
  cart: CartType[];
  isOpenCart: boolean;
  handleOpenCart: () => void;
  handleBackToMenu: () => void;
};

export default function Checkout({
  total,
  cart,
  isOpenCart,
  handleOpenCart,
  handleBackToMenu,


}: Props) {
  useEffect(() => {
    handleOpenCart();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center pt-32 md:pt-60 xl:pt-40">
      {!isOpenCart ? (
        <>
          <div className="absolute md:w-full max-w-6xl px-6">
            <FormOrder total={total} cart={cart} handleBackToMenu = {handleBackToMenu} />
          </div>
        </>
      ) : (
        <>
          <div className=" blur-sm absolute md:w-full max-w-6xl px-6">
            <FormOrder total={total} cart={cart} handleBackToMenu = {handleBackToMenu} />
          </div>
        </>
      )}
    </section>
  );
}
