import {FC, memo, useCallback, useMemo} from 'react'
import CartItem from "./CartItem"
import { CartContainerType, CartItem as CartItemType, CartSummaryType} from "../types"
import {ReactComponent as CartClear} from '../assets/images/ExitBold.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, selectCartItems, selectCartItemsWithCount } from '../store'
import CartSummary from './CartSummary'
import { cartSummaryCalculate } from '../helpers'

const CartContainer:FC<CartContainerType> = memo(({isOpened, setCartOpened}) => {
    const cartItems = useSelector((state: RootState) => selectCartItemsWithCount(state))
    //console.log('CartContainer', cartItems)

    const cartSummary: CartSummaryType = useMemo(() => {
        return cartSummaryCalculate(cartItems)
    }, [cartItems])


    return <div className={`content-cart ${isOpened ? 'slideIn' : 'slideOut'}`}>
        <div className="cart">
            <div className="cart-clear" onClick={() => setCartOpened(!isOpened)}>
                <CartClear />
            </div>
            <div className="cart-top">
                <h3 className="cart-top__title">My basket</h3>
                {cartItems.length ? cartItems.map((cartItem: CartItemType) => (
                    <CartItem key={cartItem.sku} {...cartItem} />
                )) : <div className='cart-empty'>Cart is empty</div>}
            </div>
            <div className="cart-bottom">
                <CartSummary cartSummary={cartSummary}/>
            </div>
        </div>
    </div>
})

export default CartContainer