import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { RootState } from "..";
import { IData } from "../mocked/data";

interface IProduct {
  product: IData;
  count: number;
}

interface IState {
  basket: IProduct[];
}
const initialState: IState = {
  basket: [],
};

const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<IProduct>) => {
      const hasBasket = state.basket.some((prod) => prod.product.id === action.payload.product.id);
      if (hasBasket) {
        state.basket.map((prod) => prod.count++);
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    deleteProduct: (state, action: PayloadAction<IData>) => {
      state.basket = state.basket.filter((prod) => prod.product.id !== action.payload.id);
    },
    increaseProduct: (state, action: PayloadAction<IData>) => {
      state.basket.map((prod) => {
        if (prod.product.id === action.payload.id) prod.count++;
      });
    },
    decreaseProduct: (state, action: PayloadAction<IData>) => {
      state.basket.map((prod) => {
        if (prod.product.id === action.payload.id) prod.count--;
      });
    },
  },
});

export const { addNewProduct, deleteProduct, increaseProduct, decreaseProduct } =
  BasketSlice.actions;
export const getBasket = (state: RootState) => state.basket;
export default BasketSlice.reducer;
