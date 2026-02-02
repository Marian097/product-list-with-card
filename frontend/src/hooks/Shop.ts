import { useState, useEffect, useMemo } from "react";
import type { DataApi } from "@/types/Data";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType";

export default function Shop() {
  const [data, setData] = useState<DataApi[]>([]);
  const [products, setProducts] = useState<Prod[]>([]);
  const [cart, setCart] = useState<CartType[]>([]);
  const [length, setLength] = useState(0);
  const [isNothing, setIsNothing] = useState(false)

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
    const prodArray: Prod[] = data.map((item) => ({
      id: crypto.randomUUID(),
      image: item.image,
      category: item.category,
      name: item.name,
      price: item.price,
    }));
    setProducts(prodArray);
  }, [data]);


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

  function handleDeleteToCart(items: Prod) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === items.id);
      if (found)
        return prev.map((p) =>
          p.id === items.id && p.quantity >= 1
            ? {...p, quantity: p.quantity - 1, subtotal: p.subtotal - p.price } : p)

        return prev.filter((p) => p.id !== items.id)
        
    });
  }

  return {
    products,
    total,
    cart,
    length,
    isNothing,

    addToCart,
    handleDeleteToCart,
  };
}
