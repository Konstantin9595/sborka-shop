import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import checkoutFormSlice from "./slices/checkoutFormSlice"

export const store = configureStore({
    reducer: {
        checkoutFormSlice
    },
    //middleware: (gDM) => gDM().concat()
})

// store.subscribe(() => {
//     console.log('Store subscribe')
// })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch