import type { Prod } from "@/types/Products";
import DetailsFood from "@/components/desktop/DetailsFood";
import DetailsDrinks from "@/components/desktop/DetailsDrinks";

type ProductsProp = {
  products: Prod[];
  isNothingInCart: boolean;
  isDrinks: boolean;
  addToCart: (products: Prod) => void;
};



export default function Products({ products, isDrinks, addToCart }: ProductsProp) {
  return (
    <div>
      {isDrinks ? (
        <>
          <DetailsDrinks products={products} addToCart={addToCart} />
        </>
      ) : (
        <>
          <DetailsFood products={products} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}
