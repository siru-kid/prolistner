import { createSlice } from '@reduxjs/toolkit';



const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      state.push(product);
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      return state.filter(product => product.id !== productId);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state[index] = updatedProduct;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;