import Menu from "@/components/desktop/Menu";
import type { Prod } from "@/types/Products";
import menuImg from "@/assets/images/hero-image.png"

type Props = {
  products: Prod[];
  isDrinks: boolean;
  isNothingInCart: boolean;
  addToCart: (product: Prod) => void;
  setBurgers: () => void;
  setDesserts: () => void;
  setPizza: () => void;
  setGrill: () => void;
  setGarnish: () => void;
  setDrinks: () => void;
};

export default function Home({
  products,
  isDrinks,
  isNothingInCart,
  addToCart,
  setBurgers,
  setDesserts,
  setPizza,
  setGrill,
  setGarnish,
  setDrinks,
}: Props) {
  return (
    <main className="flex md:justify-center bg-center min-h-screen bg-fixed bg-no-repeat bg-cover w-full" style = {{backgroundImage: `url(${menuImg})`}}>
      <Menu
        products={products}
        isNothingInCart = {isNothingInCart}
        addToCart={addToCart}
        setBurgers={setBurgers}
        setDesserts={setDesserts}
        setPizza={setPizza}
        setGrill={setGrill}
        setGarnish={setGarnish}
        setDrinks={setDrinks}
        isDrinks={isDrinks}
      />
    </main>
  );
}
