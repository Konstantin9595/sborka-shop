import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartItems } from "../../types"

const cartState: CartItems = {
    items: []
}

const cart = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>): void => {
            state.items.push(action.payload)
        },
        removeItemBySku: (state, action: PayloadAction<{sku: string}>): void => {
            const matchedNdxs: number[] = []
            state.items.forEach((item, ndx) => {
                if(item.sku === action.payload.sku) {
                    matchedNdxs.push(ndx)
                }
            }, [])
            const lastMatchedIndex = matchedNdxs[matchedNdxs.length - 1]
            state.items.splice(lastMatchedIndex, 1)

        },
        removeItemsBySku: (state, action: PayloadAction<{sku: string}>) => {
            const newState = state.items.filter((item: CartItem) => item.sku !== action.payload.sku)

            state.items = newState
        },
        removeAllFromCart: (state ): void => {
            state.items = []
        }
    }
})

export const { addToCart, removeItemBySku, removeItemsBySku, removeAllFromCart } = cart.actions
export default cart.reducer