import React, { FC } from "react"
// import { CheckoutStepStatus } from "../../types"

const CheckoutFormSwitchSteps:FC<
{ 
    prevStepHandler: Function,
    nextStepHandler: Function
}
> = React.memo(({prevStepHandler, nextStepHandler }) => {
    console.log('CheckoutFormSwitchSteps')

    return <div className="checkout-switcher">
        <button className="prev" onClick={() => prevStepHandler()}>Back</button>
        <button className="next" onClick={() => nextStepHandler()}>Check Out</button>
    </div>
})

export default CheckoutFormSwitchSteps