import React, {FC} from 'react'
import { CheckoutStepStatus } from "../../types"
import CheckoutFormAccountStep from './CheckoutFormAccountStep'
import CheckoutFormBillingPage from './CheckoutFormBillingPage'
import CheckoutFormReviewPage from './CheckoutFormReviewPage'
import CheckoutFormShippingPage from './CheckoutFormShippingPage'


const CheckoutFormOnBaseStep:FC<{step: CheckoutStepStatus}> = React.memo(({step}) => {
    console.log('CheckoutFormOnBaseStep')
    const switchRender = () => {
        switch(step) {
            case CheckoutStepStatus.ACCOUNT:
                return <CheckoutFormAccountStep />
            case CheckoutStepStatus.SHIPPING:
                return <CheckoutFormShippingPage />
            case CheckoutStepStatus.BILLING:
                return <CheckoutFormBillingPage />
            case CheckoutStepStatus.REVIEW:
                return <CheckoutFormReviewPage />
        }
    }

    return <div>
        {switchRender()}
    </div>
})

export default CheckoutFormOnBaseStep