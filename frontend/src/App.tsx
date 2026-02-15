import Home from "@/pages/Home";
import Shop from "@/hooks/Shop";
import Header from "@/components/desktop/Header";
import Checkout from "@/pages/Checkout";
import menuImg from "@/assets/images/hero-image.png";

function App() {
  const render = Shop();
  return (
    <body
      className="bg-center bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${menuImg})` }}
    >
      <Header
        cart={render.cart}
        isNothingInCart={render.isNothingInCart}
        length={render.length}
        total={render.total}
        handleDeleteToCart={render.handleDeleteToCart}
        handleOpenCart={render.handleOpenCart}
        isOpenCart={render.isOpenCart}
        handleConfirmOrder={render.handleConfirmOrder}
      />

      {render.isConfirmOrder ? (
          <Checkout total = {render.total} cart = {render.cart} handleOpenCart = {render.handleOpenCart} isOpenCart = {render.isOpenCart} handleBackToMenu = {render.handleBackToMenu}/>
      ) : (
        <>
          <Home
            products={render.products}
            addToCart={render.addToCart}
            setOption={render.setOption}
            isDrinks={render.isDrinks}
            isNothingInCart={render.isNothingInCart}
          />
        </>
      )}
    </body>
  );
}

export default App;
