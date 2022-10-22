import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import checkoutFormSlice from "./slices/checkoutFormSlice"
import { CheckoutStepStatus } from '../types/index'

export const store = configureStore({
    reducer: {
        checkoutFormSlice
    },
    //middleware: (gDM) => gDM().concat()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const selectStep = ((state: RootState): CheckoutStepStatus => state.checkoutFormSlice.checkoutFormCurrentStep)