import { useState, useEffect, useMemo } from "react";
import type { DataApi } from "@/types/Data";
import type { Prod } from "@/types/Products";
import type { CartType } from "@/types/CartType";

import * as yup from "yup";

type Key = "desserts" | "burgers" | "pizza" | "grill" | "garnish" | "drinks";

const orderSchema = yup.object({
  name: yup.string().required("Name is required"),

  street: yup.string().required(),
  number: yup.string().required(),
  apartament: yup.string().required(),
  floor: yup.string().required(),
  scale: yup.string().optional(),

  city: yup.string().required("City is required"),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone must contain 10-15 digits")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  note: yup.string().optional(),
});

export default function Shop() {
  const [data, setData] = useState<DataApi | null>(null);
  const [products, setProducts] = useState<Prod[]>([]);
  const [key, setKey] = useState<Key>("desserts");
  const [cart, setCart] = useState<CartType[]>([]);
  const [length, setLength] = useState(0);
  const [isNothingInCart, setIsNothingInCart] = useState(false);
  const [isDrinks, setIsDrinks] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");

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
    const prodArray: Prod[] = data[key];
    setProducts(prodArray);
  }, [data, key]);

  useEffect(() => {
    if (cart.length === 0) setIsNothingInCart(true);
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    if (key === "drinks") setIsDrinks(true);
  }, [key]);

  useEffect(() => {
    if (isOpenCart) {
      setIsBlur(true);
    }
  }, [isOpenCart]);

  function addToCart(item: Prod) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found)
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + 1,
                subtotal: (p.quantity + 1) * p.price,
              }
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
        return prev
          .map((p) =>
            p.id === id
              ? {
                  ...p,
                  quantity: p.quantity - 1,
                  subtotal: p.subtotal - p.price,
                }
              : p,
          )
          .filter((p) => p.quantity > 0);
      return prev;
    });

    setLength((prev) => prev - 1);
  }

  function setOption(option: string) {
    setKey(option as Key);
  }

  const openCart = () => setIsOpenCart(true);
  const closeCart = () => setIsOpenCart(false);
  const toggleCart = () => setIsOpenCart((prev) => !prev);

  function handleConfirmOrder() {
    if (cart.length === 0) return;

    if (isConfirmOrder) {
      setIsConfirmOrder(false);
    } else {
      setIsConfirmOrder(true);
    }
  }

  function handleBackToMenu() {
    if (isConfirmOrder) {
      setIsConfirmOrder(false);
    }
  }

  const parseAddress = (value: string) => {
    const [street, number, apartament, floor, scale] = value
      .split(",")
      .map((s) => s.trim());
    return {
      street: street || "",
      number: number || "",
      apartament: apartament || "",
      floor: floor || "",
      scale: scale || "",
    };
  };

  async function placeOrder() {
    const addr = parseAddress(address);

    const payload = {
      name: name,
      street: addr.street,
      number: addr.number,
      apartament: addr.apartament,
      floor: addr.floor,
      scale: addr.scale,
      city: city,
      country:country,
      phone:phone,
      email:email,
      note:note,
      items: cart.map((p) => ({
        name: p.name,
        quantity: p.quantity,
        price: p.price,
      })),
      total: total,
    };

    try {
      const valid = await orderSchema.validate(payload, {
        abortEarly: false,
      });

      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("OK, valid:", valid);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorsByField = Object.fromEntries(
          err.inner.map((e) => [e.path ?? "form", e.message]),
        );
        console.log("Erori:", errorsByField);
      } else {
        console.error(err);
      }
    }
  }

  return {
    products,
    total,
    cart,
    length,
    isBlur,
    isNothingInCart,
    isDrinks,
    isOpenCart,
    isConfirmOrder,
    name,
    address,
    city,
    country,
    phone,
    email,
    note,

    placeOrder,
    setNote,
    setEmail,
    setPhone,
    setCountry,
    setCity,
    setAddress,
    setName,
    addToCart,
    handleDeleteToCart,
    setOption,
    handleConfirmOrder,
    openCart,
    closeCart,
    toggleCart,
    handleBackToMenu,
  };
}
