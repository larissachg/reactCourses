import { useEffect, useMemo, useState } from "react";
import { db } from "../data/db";
import type { CartItem, Guitar } from "../types";

export const useCart = () => {
  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const minItems = 1; //para que no se pase a negativo al eliminar la cantidad
  const maxItems = 10;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Si fuera una API, esta forma seria la recomendada:
  /* useEffect(() => {
           setData(db)
         }, []) */

  function addToCart(item: Guitar) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      //existe en el carrito
      if (cart[itemExists].quantity >= maxItems) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      const newItem : CartItem = {...item, quantity: 1}
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id: Guitar['id']) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function decreaseQuantity(id: Guitar['id']) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > minItems) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function increaseQuantity(id: Guitar['id']) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < maxItems) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  //State derivado
  const isEmpty = useMemo( () => cart.length === 0, [cart]);

  const cartTotal = useMemo(() => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart]);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  };
};
