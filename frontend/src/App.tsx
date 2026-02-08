import Home from '@/pages/Home';
import Shop from "@/hooks/Shop";
import Cart from "@/components/desktop/Cart";

function App() {
  const render = Shop()
  return (
    <>
    <Home products= {render.products} isNothingInCart = {render.isNothingInCart} cart = {render.cart} addToCart = {render.addToCart} setBurgers = {render.setBurgers} setDesserts = {render.setDesserts}  setPizza = {render.setPizza} setGrill={render.setGrill} setGarnish={render.setGarnish} setDrinks={render.setDrinks} isDrinks = {render.isDrinks} />
    <Cart
        cart={render.cart}
        total={render.total}
        length={render.length}
        isNothingInCart={render.isNothingInCart}
        handleDeleteToCart={render.handleDeleteToCart}
      />
    </>
  )
}

export default App
