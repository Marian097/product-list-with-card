import FormOrder from "@/components/desktop/FormOrder";
import menuImg from "@/assets/images/hero-image.png"

export default function Checkout() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-center bg-fixed bg-no-repeat bg-cover" style = {{backgroundImage: `url(${menuImg})`}}>
      <div className="md:w-full max-w-6xl px-6 relative">
        <FormOrder />
      </div>
    </section>
  );
}
