import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { setIsLoading } from "./isLoading.slice"

export const newProductsSlice = createSlice({
   name: "newProduct",
   initialState: [],
   reducers: {
      setNewProduct: (state, action) => {
         const newProduct = action.payload
         return newProduct
      },
   },
})

export const getNewProductThunk = () => (dispatch) => {
   dispatch(setIsLoading(true))
   axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products")
      .then((res) => dispatch(setNewProduct(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)))
}

export const { setNewProduct } = newProductsSlice.actions

export default newProductsSlice.reducer
