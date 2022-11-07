import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import checkoutFormSlice from "./slices/checkoutFormSlice"
import { CheckoutFormStepsLineProps, CheckoutStepStatus } from '../types/index'
import { productApi } from "./api/product"

export const store = configureStore({
    reducer: {
        checkoutFormSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (gDM) => gDM().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const selectStep = ((state: RootState): CheckoutFormStepsLineProps['currentStep'] => state.checkoutFormSlice.checkoutFormCurrentStep)