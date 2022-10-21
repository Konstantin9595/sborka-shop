import { FC } from "react"
import {CheckoutSteps} from '../../types'

const CheckoutFormStepsLine:FC<{step: CheckoutSteps}> = ({step}) => {
    return <div className="checkout-form__steps">
            Curren Step: {step}
    </div>
}

export default CheckoutFormStepsLine