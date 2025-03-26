import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notificatiion = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: Notificatiion;
  showNotification: (payload: Pick<Notificatiion, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },

  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });

    setTimeout(() => {
      get().hideNotification();
    }, 4000);
  },

  hideNotification: () => {
    set({
      notification: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});
