import Products from "./Products";
import type { Prod } from "@/types/Products";

type ProdProps = {
  data: Prod[];
};

export default function Menu({ data }: ProdProps) {
  return (
    <div>
      <div className = "flex md:ml-20 md:pt-20 md:pb-10">
        <h1 className = "font-bold md:text-4xl ">Desserts</h1>
      </div>
      <div className = "flex md:ml-20">
        <Products data={data} />
      </div>
    </div>
  );
}
