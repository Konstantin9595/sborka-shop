import React, {FC} from 'react'
import { CheckoutStepStatus } from "../../types"
import CheckoutFormAccountStep from './CheckoutFormAccountStep'
import CheckoutFormBillingStep from './CheckoutFormBillingStep'
import CheckoutFormReviewStep from './CheckoutFormReviewStep'
import CheckoutFormShippingStep from './CheckoutFormShippingStep'
//import {UseFormRegister, RegisterOptions} from "react-hook-form"


const CheckoutFormOnBaseStep:FC<{step: CheckoutStepStatus}> = React.memo(({step}) => {
    //console.log('CheckoutFormOnBaseStep')
    const switchRender = () => {
        switch(step) {
            case CheckoutStepStatus.ACCOUNT:
                return <CheckoutFormAccountStep />
            case CheckoutStepStatus.SHIPPING:
                return <CheckoutFormShippingStep />
            case CheckoutStepStatus.BILLING:
                return <CheckoutFormBillingStep />
            case CheckoutStepStatus.REVIEW:
                return <CheckoutFormReviewStep />
        }
    }

    return <div>
        {switchRender()}
    </div>
})

export default CheckoutFormOnBaseStep