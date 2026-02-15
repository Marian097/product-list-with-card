import TheadTable from "@/components/desktop/TheadTable"
import TbodyTable from "@/components/desktop/TbodyTable"
import TfootTable from "@/components/desktop/TfootTable"
import type {CartType} from "@/types/CartType"


type Props = {
  total:number;
  cart: CartType[];
}

export default function TableOrder({total, cart}: Props) {
  return (
    <div className="w-full overflow-x-auto">
        <table className = "table-auto w-full text-white">
          <TheadTable/>
          <TbodyTable cart = {cart}/>
          <TfootTable total = {total}/>
        </table>
    </div>
  );
}
