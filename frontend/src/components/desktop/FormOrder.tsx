import InputCity from "@/components/desktop/InputCity";
import InputEmail from "@/components/desktop/InputEmail";
import InputName from "@/components/desktop/InputName";
import InputNoteOrder from "@/components/desktop/InputNoteOrder";
import InputPhone from "@/components/desktop/InputPhone";
import InputAddress from "@/components/desktop/InputAddress";
import PaymentOption from "@/components/desktop/PaymentOption";
import TableOrder from "@/components/desktop/TableOrder";
import Undo from "@/assets/images/undo.png";
import type { CartType } from "@/types/CartType";

type Props = {
  total: number;
  cart: CartType[];
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  note: string;
  number: string;
  block: string;
  floor: string;
  scale: string;
  apartament: string;
  handleBackToMenu: () => void;
  placeOrder: () => void;
  onSetNote: (value: string) => void;
  onSetEmail: (value: string) => void;
  onSetPhone: (value: string) => void;
  onSetCity: (value: string) => void;
  onSetStreet: (value: string) => void;
  setName: (value: string) => void;
  onSetNumber: (value: string) => void;
  onSetBlock: (value: string) => void;
  onSetFloor: (value: string) => void;
  onSetScale: (value: string) => void;
  onSetApartament: (value: string) => void;
  cancelOrder: () => void;
};

export default function FormOrder({
  total,
  cart,
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
  return (
    <>
      <section className="hidden sm:flex absolute inset-0 items-center justify-center pt-32">
        <form
          className="relative
        rounded-2xl bg-black/65 backdrop-blur
        px-6 py-5 2xl:py-36 2xl:px-36
        shadow-[0_35px_120px_-55px_rgba(0,0,0,0.7)]
        ring-1 ring-black/10
        transition duration-300
        [transform:perspective(1200px)_rotateX(6deg)]
        hover:[transform:perspective(1200px)_rotateX(0deg)]"
        >
          <div className="absolute">
            <img
              src={Undo}
              alt=""
              className="max-w-14 cursor-pointer"
              onClick={() => handleBackToMenu()}
            />
          </div>

          <div className="flex justify-center py-5">
            <h2 className="text-white font-bold italic text-sm lg:text-lg">
              Fresh ingredients, handmade, served hot 🔥
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-4 rounded-xl">
              <div>
                {" "}
                <InputName name={name} setName={setName} />
              </div>
              <div>
                <InputAddress
                  street={street}
                  number={number}
                  block={block}
                  floor={floor}
                  scale={scale}
                  apartament={apartament}
                  onSetStreet={onSetStreet}
                  onSetNumber={onSetNumber}
                  onSetBlock={onSetBlock}
                  onSetFloor={onSetFloor}
                  onSetScale={onSetScale}
                  onSetApartament={onSetApartament}
                />
              </div>
              <div>
                <InputCity city={city} onSetCity={onSetCity} />
              </div>
              <div>
                <InputPhone phone={phone} onSetPhone={onSetPhone} />
              </div>
              <div>
                <InputEmail email={email} onSetEmail={onSetEmail} />
              </div>
              <div>
                <InputNoteOrder note={note} onSetNote={onSetNote} />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-4 rounded-xl px-10 py-8">
              <div className="border-b-2 flex flex-col">
                <TableOrder total={total} cart={cart} />
              </div>
              <div>
                <PaymentOption placeOrder={placeOrder} handleBackToMenu = {handleBackToMenu} cancelOrder = {cancelOrder}/>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="sm:hidden w-full min-h-screen pt-48 md:pt-36">
        <div className="flex flex-col justify-center gap-y-5 items-center">
          <div>
            {" "}
            <InputName name={name} setName={setName} />
          </div>
          <div>
            <InputAddress  street={street}
                  number={number}
                  block={block}
                  floor={floor}
                  scale={scale}
                  apartament={apartament}
                  onSetStreet={onSetStreet}
                  onSetNumber={onSetNumber}
                  onSetBlock={onSetBlock}
                  onSetFloor={onSetFloor}
                  onSetScale={onSetScale}
                  onSetApartament={onSetApartament}/>
          </div>
          <div>
            <InputCity city={city} onSetCity={onSetCity}/>
          </div>
          <div>
            <InputPhone phone={phone} onSetPhone={onSetPhone}  />
          </div>
          <div>
            <InputEmail email={email} onSetEmail={onSetEmail}/>
          </div>
          <div>
            <InputNoteOrder note={note} onSetNote={onSetNote} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <div className = "mt-5">
            <TableOrder cart={cart} total={total} />
          </div>
          <div>
            <PaymentOption  placeOrder={placeOrder} handleBackToMenu = {handleBackToMenu} cancelOrder = {cancelOrder}/>
          </div>
        </div>
      </section>
    </>
  );
}
