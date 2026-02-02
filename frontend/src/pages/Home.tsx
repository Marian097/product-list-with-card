
import Menu from '@/components/desktop/Menu';
import type {Prod} from "@/types/Products";
import type {CartType} from "@/types/CartType";
import Cart from "@/components/desktop/Cart"

type Props = {
    products: Prod[],
    cart: CartType[],
    total:number,
    length:number,
    isNothing: boolean,
    addToCart: (product: Prod) => void,
    handleDeleteToCart: (cart: Prod) => void
}



export default function Home({products, cart, total, length, isNothing, addToCart, handleDeleteToCart} : Props) {
  return (
    <main className = "flex">
        <Menu products = {products} addToCart = {addToCart} handleDeleteToCart = {handleDeleteToCart}/>
        <Cart cart = {cart} total = {total} length = {length} isNothing = {isNothing}/>
    </main>
  )
}
