import { configureStore } from "@reduxjs/toolkit"
import isLoadingSlice from "./slice/isLoading.slice"
import newProductsSlice from "./slice/newProducts.slice"
import purchasesSlice from "./slice/purchases.slice"

export default configureStore({
   reducer: {
      isLoading: isLoadingSlice,
      newProduct: newProductsSlice,
      purchases: purchasesSlice,
   },
})
