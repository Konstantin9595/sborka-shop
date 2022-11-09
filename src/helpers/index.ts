import { CartItem, CartSummaryType } from "../types"

export const repeatedItemsCount = (cartItem: CartItem, array: CartItem[]) => {
    return array.reduce((acc: number, item: CartItem) => {

        if(item.sku === cartItem.sku) {
            acc += 1
        }

        return acc
    }, 0)
}

export const removeDoublesFromArrayOfObjects = (CartItemWithCount: CartItem[]) => {
    return CartItemWithCount.filter((cartItem, index, array) => (
        array.findIndex( item => (item.sku === cartItem.sku)) === index
    ))
}

export const cartSummaryCalculate = (cartItems: CartItem[]): CartSummaryType => {
    const cartSummary: CartSummaryType = {
        subtotal: 0,
        shipping: 0,
        tax: 0,
        total: 0
    }

    return cartItems.reduce((summary, item: CartItem) => {
        summary.subtotal = summary.subtotal + (item.price * item.count)
        summary.total = summary.subtotal + summary.shipping + summary.tax
        return summary

    }, cartSummary)
}