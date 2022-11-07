import { FC } from 'react'
import { ReactComponent as CartIconSvg} from '../assets/images/CartIcon.svg'
import { ReactComponent as CartIconWithBackgroundSvg} from '../assets/images/CartIconWithBackground.svg'

import { CartIconProps } from '../types'

const CartIcon:FC<CartIconProps> = ({withBackground}) => {
    
    return <>
        {withBackground ? <CartIconWithBackgroundSvg /> : <CartIconSvg /> }
    </>
}

export default CartIcon