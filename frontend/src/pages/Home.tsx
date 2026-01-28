
import Menu from '@/components/desktop/Menu';
import type {Prod} from "@/types/Products";
import type {CartType} from "@/types/CartType";
import Cart from "@/components/desktop/Cart"

type Props = {
    products: Prod[],
    cart: CartType[],
    total:number,
    addToCart: (product: Prod) => void
}



export default function Home({products, cart, total, addToCart} : Props) {
  return (
    <main className = "flex">
        <Menu products = {products} addToCart = {addToCart}/>
        <Cart cart = {cart} total = {total}/>
    </main>
  )
}
