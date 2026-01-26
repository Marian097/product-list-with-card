import Products from "./Products";
import type { Prod } from "@/types/Products";

type ProdProps = {
  data: Prod[];
};

export default function Menu({ data }: ProdProps) {
  return (
    <main>
      <h1>Desserts</h1>
      <div>
        <Products data={data}/>
      </div>
    </main>
  );
}
