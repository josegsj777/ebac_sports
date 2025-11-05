import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Produto} from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const prodVenda = action.payload

      if(state.itens.find((produto) => produto.id === prodVenda.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(prodVenda)
      }
    }
  }
})

export const {adicionar} = carrinhoSlice.actions
export default carrinhoSlice.reducer
