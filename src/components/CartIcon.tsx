import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as CartIconSvg} from '../assets/images/CartIcon.svg'
import { ReactComponent as CartIconWithBackgroundSvg} from '../assets/images/CartIconWithBackground.svg'
import { RootState, selectCartItems } from '../store'

import { CartIconProps } from '../types'

const CartIcon:FC<CartIconProps> = ({withBackground}) => {
    const cartItems = useSelector(selectCartItems)

    const cartIconHandler = () => {
        
    }

    const renderCartIconWithBg = () => <CartIconWithBackgroundSvg />
    
    const renderCartIcon = (count: number) => {
        return <>
            { cartItems.length ?
            <> 
                <div className="cart-icon__count">
                    <span className='icon-count__text'>
                        {cartItems.length}
                    </span>
                </div>
                <CartIconSvg />
            </> 
            : <CartIconSvg />
            }
        </>
    }

    return <div className='cart-icon' onClick={() => cartIconHandler()}>
        {withBackground ? renderCartIconWithBg() : renderCartIcon(2) }
    </div>
}

export default CartIcon