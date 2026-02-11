import InputCity from "@/components/desktop/InputCity";
import InputCountry from "@/components/desktop/InputCountry";
import InputEmail from "@/components/desktop/InputEmail";
import InputName from "@/components/desktop/InputName";
import InputNoteOrder from "@/components/desktop/InputNoteOrder";
import InputPhone from "@/components/desktop/InputPhone";
import InputStreet from "@/components/desktop/InputStreet";
import PaymentOption from "@/components/desktop/PaymentOption";
import TableOrder from "@/components/desktop/TableOrder";

export default function FormOrder() {
  return (
    <section className = "">
      <form>
        <InputName />
        <InputStreet />
        <InputCity />
        <InputCountry />
        <InputPhone />
        <InputEmail />
        <InputNoteOrder />
        <TableOrder />
        <PaymentOption />
      </form>
    </section>
  );
}
