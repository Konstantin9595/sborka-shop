import {FC, memo} from 'react'
import { CartSummaryType } from "../types"



const CartSummary:FC<{cartSummary: CartSummaryType}> = memo(({cartSummary}) => {
    return <div className="summary">
        <div className="summary-item">
            <div className="summary-item__name">Subtotal</div>
            <div className="summary-item__value">$ {cartSummary.subtotal}</div>
        </div>
        <div className="summary-item">
            <div className="summary-item__name">Tax</div>
            <div className="summary-item__value">$ {cartSummary.tax}</div>
        </div>
        <div className="summary-item">
            <div className="summary-item__name">Shipping</div>
            <div className="summary-item__value">$ {cartSummary.shipping}</div>
        </div>
        <div className="summary-item">
            <div className="summary-item__name">Total</div>
            <div className="summary-item__value">$ {cartSummary.total}</div>
        </div>
    </div>
})

export default CartSummary