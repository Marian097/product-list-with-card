import Home from '@/pages/Home';
import Shop from "@/hooks/Shop";

function App() {
  const render = Shop()
  return (
    <>
    <Home products= {render.products} cart = {render.cart} total = {render.total} addToCart = {render.addToCart} length = {render.length} handleDeleteToCart = {render.handleDeleteToCart} isNothingInCart = {render.isNothingInCart}/>
    </>
  )
}

export default App
