import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions =
  | { type: "add-to-cart"; payload: { item: Guitar } }
  | { type: "remove-from-cart"; payload: { id: Guitar["id"] } }
  | { type: "decrease-quantity"; payload: { id: Guitar["id"] } }
  | { type: "increase-quantity"; payload: { id: Guitar["id"] } }
  | { type: "clear-cart" };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

export const initialState: CartState = {
  data: db,
  cart: [],
};

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    
}