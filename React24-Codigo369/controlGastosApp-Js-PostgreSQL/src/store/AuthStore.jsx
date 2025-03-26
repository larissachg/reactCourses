import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
  isAuth: false,
  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error)
        throw new Error("A ocurrido un error durante la autenticacion");

      set({ isAuth: true });

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  signout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesion");
    set({ isAuth: true });
  },
}));
