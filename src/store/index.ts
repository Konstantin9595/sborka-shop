import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import checkoutFormSlice from "./slices/checkoutFormSlice"
import cart from "./slices/cartSlice"
import menu from './slices/menu'
import { CartItem, CheckoutFormStepsLineProps } from '../types/index'
import { productApi } from "./api/product"
import { removeDoublesFromArrayOfObjects, repeatedItemsCount } from "../helpers"
import { 
    persistReducer,
    persistStore,
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER
} from "redux-persist"
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    checkoutFormSlice,
    cart,
    menu,
    [productApi.reducerPath]: productApi.reducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (gDM) => gDM({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
    .concat(productApi.middleware)
})


//store
export const persistor = persistStore(store)

//types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


// selectores
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