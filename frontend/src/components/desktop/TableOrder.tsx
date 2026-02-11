import TheadTable from "@/components/desktop/TheadTable"
import TbodyTable from "@/components/desktop/TbodyTable"
import TfootTable from "@/components/desktop/TfootTable"



export default function TableOrder() {
  return (
    <div className="w-full overflow-x-auto">
        <table className = "table-auto w-full">
          <TheadTable/>
          <TbodyTable/>
          <TfootTable/>
        </table>
    </div>
  );
}
