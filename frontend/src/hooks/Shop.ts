import { useState, useEffect, useMemo } from "react";
import type { DataApi } from "@/types/Data";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType";



type Key = "desserts" | "burgers" | "pizza";


export default function Shop() {
  const [data, setData] = useState<DataApi | null>(null);
  const [products, setProducts] = useState<Prod[]>([]);
  const [key, setKey] = useState<Key>("desserts")
  const [cart, setCart] = useState<CartType[]>([]);
  const [length, setLength] = useState(0);
  const [isNothingInCart, setIsNothingInCart] = useState(false)

  const total = useMemo(() => {
    return cart.reduce((sum, val) => sum + val.subtotal, 0);
  }, [cart]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (!data) return;
    const prodArray: Prod[] = data[key]
    setProducts(prodArray);
  }, [data, key]);


  console.log(data)


  useEffect(() => {
    if (cart.length === 0) setIsNothingInCart(true);
      console.log(cart)
  }, [cart])


  function addToCart(item: Prod) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found)
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1, subtotal: (p.quantity + 1) * p.price }
            : p,
        );
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          subtotal: item.price,
        },
      ];
    });
    setLength((prev) => prev + 1);
  }

  function handleDeleteToCart(id: string) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === id);
      if (found)
        return prev.map((p) =>
          p.id === id
            ? {...p, quantity: p.quantity - 1, subtotal: p.subtotal - p.price } : p).filter((p) => p.quantity > 0)
            return prev
    });

    setLength(prev => prev - 1);
  }


  function setBurgers(){
    setKey("burgers")
  }

  function setDesserts(){
    setKey("desserts")
  }

  function setPizza(){
    setKey("pizza")
  }

  return {
    products,
    total,
    cart,
    length,
    isNothingInCart,

    addToCart,
    handleDeleteToCart,
    setBurgers,
    setDesserts,
    setPizza,
  };
}
