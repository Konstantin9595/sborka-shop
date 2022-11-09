
import { ReactComponent as RemoveItem } from "../assets/images/ExitLight.svg"
import {FC} from 'react'
import { CartItem as CartItemType } from "../types"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeItemBySku, removeItemsBySku } from "../store/slices/cartSlice"

const CartItem:FC<CartItemType> = (cartItem) => {

    const dispatch = useDispatch()

    const minusItemFromCart = ({sku}: CartItemType) => {
        dispatch(removeItemBySku({sku}))
    }

    const plusItemToCart = (cartItem: CartItemType) => {
        dispatch(addToCart(cartItem))
    }

    const removeItemsBySkuHandler = ({sku}: CartItemType) => {
        dispatch(removeItemsBySku({sku}))
    }

    return <div className='cart-item'>

        <div className="cart-item__left">
            <img className="cart-item__image" src={cartItem.image.url} alt={cartItem.title} />
        </div>
        <div className="cart-item__right">
            <div className="cart-item__title">
                {cartItem.title}
            </div>
            <div className="cart-item__controls">
                <div className="control-minus" onClick={() => minusItemFromCart(cartItem)}></div>
                <div className="control-count">{cartItem.count}</div>
                <div className="control-plus" onClick={() => plusItemToCart(cartItem)}></div>
                <div className="control-price">{cartItem.symbol} {cartItem.price}</div>
            </div>
            <div className="cart-item__remove" onClick={() => removeItemsBySkuHandler(cartItem)}>
                <RemoveItem />
            </div>
        </div>


    </div>
}

export default CartItem