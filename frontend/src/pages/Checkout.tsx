import FormOrder from "@/components/desktop/FormOrder";
import type { CartType } from "@/types/CartType";
import { useEffect } from "react";

type Props = {
  total: number;
  cart: CartType[];
  name: string | " ";
  street: string;
  city: string;
  phone: string;
  email: string;
  note: string;
  isOpenCart: boolean;
  number: string;
  block: string;
  floor: string;
  scale: string;
  apartament: string;
  onSetNumber: (value: string) => void;
  onSetBlock: (value: string) => void;
  onSetFloor: (value: string) => void;
  onSetScale: (value: string) => void;
  onSetApartament: (value: string) => void;
  closeCart: () => void;
  handleBackToMenu: () => void;
  placeOrder: () => void;
  onSetNote: (value: string) => void;
  onSetEmail: (value: string) => void;
  onSetPhone: (value: string) => void;
  onSetCity: (value: string) => void;
  onSetStreet: (value: string) => void;
  setName: (value: string) => void;
  cancelOrder: () => void;
};

export default function Checkout({
  total,
  cart,
  isOpenCart,
  name,
  street,
  city,
  phone,
  email,
  note,
  number,
  block,
  floor,
  scale,
  apartament,
  onSetNumber,
  onSetBlock,
  onSetFloor,
  onSetScale,
  onSetApartament,
  closeCart,
  handleBackToMenu,
  placeOrder,
  onSetNote,
  onSetEmail,
  onSetPhone,
  onSetCity,
  onSetStreet,
  setName,
  cancelOrder,
}: Props) {
  useEffect(() => {
    closeCart();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center pt-32 md:pt-60 xl:pt-40">
      {isOpenCart ? (
        <>
          <div className="blur-sm absolute md:w-full max-w-6xl px-6">
            <FormOrder
              total={total}
              cart={cart}
              handleBackToMenu={handleBackToMenu}
              name={name}
              street={street}
              city={city}
              phone={phone}
              email={email}
              note={note}
              placeOrder={placeOrder}
              onSetNote={onSetNote}
              onSetEmail={onSetEmail}
              onSetPhone={onSetPhone}
              onSetCity={onSetCity}
              onSetStreet={onSetStreet}
              setName={setName}
              number={number}
              block={block}
              floor={floor}
              scale={scale}
              apartament={apartament}
              onSetNumber={onSetNumber}
              onSetBlock={onSetBlock}
              onSetFloor={onSetFloor}
              onSetScale={onSetScale}
              onSetApartament={onSetApartament}
              cancelOrder= {cancelOrder}
            />
          </div>
        </>
      ) : (
        <>
          <div className="absolute md:w-full max-w-6xl px-6">
            <FormOrder
              total={total}
              cart={cart}
              handleBackToMenu={handleBackToMenu}
              name={name}
              street={street}
              city={city}
              phone={phone}
              email={email}
              note={note}
              placeOrder={placeOrder}
              onSetNote={onSetNote}
              onSetEmail={onSetEmail}
              onSetPhone={onSetPhone}
              onSetCity={onSetCity}
              onSetStreet={onSetStreet}
              setName={setName}
              number={number}
              block={block}
              floor={floor}
              scale={scale}
              apartament={apartament}
              onSetNumber={onSetNumber}
              onSetBlock={onSetBlock}
              onSetFloor={onSetFloor}
              onSetScale={onSetScale}
              onSetApartament={onSetApartament}
              cancelOrder= {cancelOrder}
            />
          </div>
        </>
      )}
    </section>
  );
}
