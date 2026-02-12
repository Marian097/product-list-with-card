import Menu from "@/components/desktop/Menu";
import type { Prod } from "@/types/Products";
import menuImg from "@/assets/images/hero-image.png"

type Props = {
  products: Prod[];
  isDrinks: boolean;
  isNothingInCart: boolean;
  addToCart: (product: Prod) => void;
  setOption: (option: string) => void;
};

export default function Home({
  products,
  isDrinks,
  isNothingInCart,
  addToCart,
  setOption,
}: Props) {
  return (
    <main className="flex md:justify-center bg-center min-h-screen bg-fixed bg-no-repeat bg-cover w-full" style = {{backgroundImage: `url(${menuImg})`}}>
      <Menu
        products={products}
        isNothingInCart = {isNothingInCart}
        addToCart={addToCart}
        setOption = {setOption}
        isDrinks={isDrinks}
      />
    </main>
  );
}
