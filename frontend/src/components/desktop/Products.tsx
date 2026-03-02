import type { Prod } from "@/types/Products";
import DetailsFood from "@/components/desktop/DetailsFood";
import DetailsDrinks from "@/components/desktop/DetailsDrinks";

type ProductsProp = {
  products: Prod[];
  isNothingInCart: boolean;
  isDrinks: boolean;
  rated: number;
  setRated: (rating: number) => void;
  addToCart: (products: Prod) => void;
};



export default function Products({ products, isDrinks, rated, setRated, addToCart }: ProductsProp) {
  return (
    <div>
      {isDrinks ? (
        <>
          <DetailsDrinks products={products} addToCart={addToCart} rated = {rated} setRated = {setRated} />
        </>
      ) : (
        <>
          <DetailsFood products={products} addToCart={addToCart} rated = {rated} setRated = {setRated}/>
        </>
      )}
    </div>
  );
}
