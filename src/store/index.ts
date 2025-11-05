import { configureStore } from "@reduxjs/toolkit";
import favoritoReducer from './reducers/favorito'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
