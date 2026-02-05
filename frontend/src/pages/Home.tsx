
import Menu from '@/components/desktop/Menu';
import type {Prod} from "@/types/Products";
import type {CartType} from "@/types/CartType";
import Cart from "@/components/desktop/Cart"

type Props = {
    products: Prod[],
    cart: CartType[],
    total:number,
    length:number,
    isNothingInCart: boolean,
    addToCart: (product: Prod) => void,
    handleDeleteToCart: (id: string) => void,
    setBurgers: () => void,
    setDesserts: () => void,
    setPizza: () => void,
}



export default function Home({products, cart, total, length, isNothingInCart, addToCart, handleDeleteToCart, setBurgers, setDesserts, setPizza } : Props) {
  return (
    <main className = "flex md:justify-center">
        <Menu products = {products} addToCart = {addToCart} isNothingInCart = {isNothingInCart} cart = {cart} setBurgers = {setBurgers} setDesserts = {setDesserts}  setPizza = {setPizza}/>
        <Cart cart = {cart} total = {total} length = {length} isNothingInCart = {isNothingInCart} handleDeleteToCart = {handleDeleteToCart}/>
    </main>
  )
}
