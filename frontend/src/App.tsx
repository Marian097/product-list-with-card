import Home from '@/pages/Home';
import Shop from "@/hooks/Shop";
import Header from '@/components/desktop/Header';



function App() {
  const render = Shop()
  return (
    <>
    <Header cart = {render.cart} isNothingInCart = {render.isNothingInCart} length = {render.length} total = {render.total} handleDeleteToCart  = {render.handleDeleteToCart} handleOpenCart = {render.handleOpenCart} isOpenCart = {render.isOpenCart}/>
    <Home products= {render.products}  addToCart = {render.addToCart} setBurgers = {render.setBurgers} setDesserts = {render.setDesserts}  setPizza = {render.setPizza} setGrill={render.setGrill} setGarnish={render.setGarnish} setDrinks={render.setDrinks} isDrinks = {render.isDrinks} isNothingInCart = {render.isNothingInCart}/>
    </>
  )
}

export default App
