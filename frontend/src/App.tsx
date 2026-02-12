import Home from '@/pages/Home';
import Shop from "@/hooks/Shop";
import Header from '@/components/desktop/Header';
import Checkout from "@/pages/Checkout";




function App() {
  const render = Shop()
  return (
    <>
    <Header cart = {render.cart} isNothingInCart = {render.isNothingInCart} length = {render.length} total = {render.total} handleDeleteToCart  = {render.handleDeleteToCart} handleOpenCart = {render.handleOpenCart} isOpenCart = {render.isOpenCart}/>  
    {/* <Home products= {render.products}  addToCart = {render.addToCart} setOption= {render.setOption} isDrinks = {render.isDrinks} isNothingInCart = {render.isNothingInCart}/> */}
    <Checkout/>
    </>
  )
}

export default App
