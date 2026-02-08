import Menu from "@/components/desktop/Menu";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType";

type Props = {
  products: Prod[];
  cart: CartType[];
  isNothingInCart: boolean;
  isDrinks: boolean;
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
  cart,
  isNothingInCart,
  isDrinks,
  addToCart,
  setBurgers,
  setDesserts,
  setPizza,
  setGrill,
  setGarnish,
  setDrinks,
}: Props) {
  return (
    <main className="flex md:justify-center menu">
      <Menu
        products={products}
        addToCart={addToCart}
        isNothingInCart={isNothingInCart}
        cart={cart}
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
