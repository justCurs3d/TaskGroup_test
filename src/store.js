import { create } from "zustand";
import toast from "react-hot-toast";

const saySuccess = () => {
  toast.dismiss();
  toast.success("Товар добавлен в корзину");
};

const sayDelete = () => {
  toast.dismiss();
  toast.error("Товар удален из корзины");
};

export const useAuth = create((set) => ({
  isAuth: false,
  setValue: (value) => set((state) => ({ isAuth: value })),
}));

let localBasketItems = localStorage.getItem('basketItems')

if (localStorage.getItem('basketItems')) {
  localBasketItems = [...localStorage.getItem("basketItems")]
  .filter((item) => {
    if (isNaN(Number(item))) {
      return false;
    } else {
      return true;
    }
  })
  .map((e) => Number(e))
} else {
  localBasketItems = []
}

export const useBasket = create((set) => ({
  basketItems: 
    (localStorage.getItem('basketItems') && localStorage.getItem("basketItems").length > 0)
      ? localBasketItems
      : [],

  setBasketItemsValue: (value) => {
    set(() => ({ basketItems: value }));
  },

  addBasketItem: (id) => {
    set((state) => ({ basketItems: [...state.basketItems, id] }));
    saySuccess();
  },

  removeBasketItem: (id) => {
    set((state) => ({
      basketItems: state.basketItems.filter((item) => {
        return item !== id;
      }),
    }));
    sayDelete();
  },
}));
