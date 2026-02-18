import FormOrder from "@/components/desktop/FormOrder";
import type { CartType } from "@/types/CartType";
import { useEffect } from "react";

type Props = {
  total: number;
  cart: CartType[];
  name: string,
  address:string,
  city: string,
  country: string,
  phone:string,
  email:string,
  note:string,
  isOpenCart: boolean;
  closeCart: () => void;
  handleBackToMenu: () => void;
  placeOrder: () => void;
  onSetNote: (value:string) => void;
  onSetEmail: (value:string) => void;
  onSetPhone: (value:string) => void;
  onSetCountry: (value:string) => void;
  onSetCity: (value:string) => void;
  onSetAddress: (value:string) => string;
  onSetName: (value:string) => void;
};

export default function Checkout({
  total,
  cart,
  isOpenCart,
  name,
  address,
  city,
  country,
  phone,
  email,
  note,
  closeCart,
  handleBackToMenu,
  placeOrder,
  onSetNote,
  onSetEmail,
  onSetPhone,
  onSetCountry,
  onSetCity,
  onSetAddress,
  onSetName


}: Props) {
  
  useEffect(() => {
    closeCart();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center pt-32 md:pt-60 xl:pt-40">
      {isOpenCart ? (
        <>
          <div className="blur-sm absolute md:w-full max-w-6xl px-6">
            <FormOrder total={total} cart={cart} handleBackToMenu = {handleBackToMenu} name = {name} address = {address} city = {city} country = {country} phone = {phone} email = {email} note = {note} placeOrder = {placeOrder} onSetNote = {onSetNote} onSetEmail = {onSetEmail} onSetPhone = {onSetPhone} onSetCountry = {onSetCountry} onSetCity = {onSetCity} onSetAddress = {onSetAddress} onSetName = {onSetName} />
          </div>
        </>
      ) : (
        <>
          <div className="absolute md:w-full max-w-6xl px-6">
            <FormOrder total={total} cart={cart} handleBackToMenu = {handleBackToMenu} />
          </div>
        </>
      )}
    </section>
  );
}
