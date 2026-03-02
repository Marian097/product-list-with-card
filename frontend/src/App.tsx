import Home from "@/pages/Home";
import Shop from "@/hooks/Shop";
import Header from "@/components/desktop/Header";
import Checkout from "@/pages/Checkout";

function App() {
  const render = Shop();
  return (
    <>
      <Header
        cart={render.cart}
        isNothingInCart={render.isNothingInCart}
        length={render.length}
        total={render.total}
        handleDeleteToCart={render.handleDeleteToCart}
        toggleCart={render.toggleCart}
        isOpenCart={render.isOpenCart}
        handleConfirmOrder={render.handleConfirmOrder}
      />

      {render.isConfirmOrder ? (
        <Checkout
          total={render.total}
          cart={render.cart}
          closeCart={render.closeCart}
          isOpenCart={render.isOpenCart}
          handleBackToMenu={render.handleBackToMenu}
          name={render.name}
          street={render.street}
          city={render.city}
          phone={render.phone}
          email={render.email}
          note={render.note}
          placeOrder={render.placeOrder}
          onSetNote={render.setNote}
          onSetEmail={render.setEmail}
          onSetPhone={render.setPhone}
          onSetCity={render.setCity}
          onSetStreet={render.setStreet}
          setName={render.setName}
          number={render.number}
          block={render.block}
          floor={render.floor}
          scale={render.scale}
          apartament={render.apartament}
          onSetNumber = {render.setNumber}
          onSetBlock = {render.setBlock}
          onSetFloor = {render.setFloor}
          onSetScale = {render.setScale}
          onSetApartament = {render.setApartament}
          cancelOrder = {render.cancelOrder}
        />
      ) : (
        <>
          <Home
          
            rated = {render.rated}
            setRated = {render.setRated}
            products={render.products}
            addToCart={render.addToCart}
            setOption={render.setOption}
            isDrinks={render.isDrinks}
            isNothingInCart={render.isNothingInCart}
          />
        </>
      )}
    </>
  );
}

export default App;
