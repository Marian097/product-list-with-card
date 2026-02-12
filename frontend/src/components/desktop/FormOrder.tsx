import InputCity from "@/components/desktop/InputCity";
import InputCountry from "@/components/desktop/InputCountry";
import InputEmail from "@/components/desktop/InputEmail";
import InputName from "@/components/desktop/InputName";
import InputNoteOrder from "@/components/desktop/InputNoteOrder";
import InputPhone from "@/components/desktop/InputPhone";
import InputStreet from "@/components/desktop/InputStreet";
import PaymentOption from "@/components/desktop/PaymentOption";
import TableOrder from "@/components/desktop/TableOrder";
import Undo from "@/assets/images/undo.png";


export default function FormOrder() {
  return (
    <>
      <section className="hidden sm:flex absolute inset-0 items-center justify-center">
        <form className="  relative
        rounded-2xl bg-black/65 backdrop-blur
        px-6 py-20 2xl:py-36 2xl:px-36
        shadow-[0_35px_120px_-55px_rgba(0,0,0,0.7)]
        ring-1 ring-black/10
        transition duration-300
        [transform:perspective(1200px)_rotateX(6deg)]
        hover:[transform:perspective(1200px)_rotateX(0deg)]">
          <div className = "absolute flex gap-x-56 top-4 left-3 text-3xl">
            <img src={Undo} alt="" className = "max-w-14"/>
          <div>
            <h2 className = "text-white font-bold italic">Fresh ingredients, handmade, served hot 🔥</h2>
          </div>
          </div>
          
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-32 ">
            <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-12 border-2 rounded-xl border-white ">
              <div>
                {" "}
                <InputName />
              </div>
              <div>
                <InputStreet />
              </div>
              <div>
                <InputCity />
              </div>
              <div>
                <InputCountry />
              </div>
              <div>
                <InputPhone />
              </div>
              <div>
                <InputEmail />
              </div>
              <div>
                <InputNoteOrder />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-4 border-2 border-white rounded-xl px-10 py-8">
              <div className = "border-b-2">
                <TableOrder />
              </div>
              <div>
                <PaymentOption />
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="sm:hidden py-10 w-full">
        <div className="sm:hidden py-10 absolute translate-x-1/2 translate-y-1/2 right-10 bottom-0">
          <div className="flex flex-col justify-center gap-y-4 items-center">
            <div>
              {" "}
              <InputName />
            </div>
            <div>
              <InputStreet />
            </div>
            <div>
              <InputCity />
            </div>
            <div>
              <InputCountry />
            </div>
            <div>
              <InputPhone />
            </div>
            <div>
              <InputEmail />
            </div>
            <div>
              <InputNoteOrder />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            <div>
              <TableOrder />
            </div>
            <div>
              <PaymentOption />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
