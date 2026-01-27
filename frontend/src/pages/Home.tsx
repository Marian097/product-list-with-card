
import Menu from '@/components/desktop/Menu';
import type {Prod} from "@/types/Products";

type ProdProps = {
    data: Prod[]
}

export default function Home({data} : ProdProps) {
  return (
    <main>
        <Menu data = {data}/>
    </main>
  )
}
