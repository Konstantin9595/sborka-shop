import React, { FC } from "react"

const CheckoutFormSwitchSteps:FC<
{ 
    prevStepHandler: Function,
    nextStepHandler: Function
}
> = React.memo(({ prevStepHandler, nextStepHandler }) => {
    return <div className="checkout-switcher">
        <button className="checkout-switcher__button prev" onClick={() => prevStepHandler()}>Back</button>
        <button className="checkout-switcher__button next" onClick={() => nextStepHandler()}>Check Out</button>
    </div>
})

export default CheckoutFormSwitchSteps