import { configureStore, createSelector } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import checkoutFormSlice from "./slices/checkoutFormSlice"
import cart from "./slices/cartSlice"
import { CartItem, CheckoutFormStepsLineProps } from '../types/index'
import { productApi } from "./api/product"
import { removeDoublesFromArrayOfObjects, repeatedItemsCount } from "../helpers"

export const store = configureStore({
    reducer: {
        checkoutFormSlice,
        cart,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (gDM) => gDM().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const selectStep = ((state: RootState): CheckoutFormStepsLineProps['currentStep'] => state.checkoutFormSlice.checkoutFormCurrentStep)

export const selectCartItems = ((state: RootState): CartItem[] => state.cart.items)

export const selectCartItemsWithCount = createSelector(
    selectCartItems, 
    (items: CartItem[]) => {
        
        const cartItemsWithCount: CartItem[] = []

        for(let item in items) {
            const cartItem = items[item]

            const repeatedCount = repeatedItemsCount(cartItem, items)

            cartItemsWithCount.push({...cartItem, count: repeatedCount})
        }

        return removeDoublesFromArrayOfObjects(cartItemsWithCount)

    }
 )