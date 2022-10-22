
import { useState, FC, useCallback } from "react"
import { CheckoutStepStatus } from "../types"
import { useDispatch, useSelector } from "react-redux"
import CheckoutFormSwitchSteps from "./CheckoutForms/CheckoutFormSwitchSteps"
import { selectStep, AppDispatch, RootState } from '../store'
import { switchCurrentStep } from "../store/slices/checkoutFormSlice"
import CheckoutFormOnBaseStep from "./CheckoutForms/CheckoutFormOnBaseStep"
// import CheckoutFormAccountStep from "./CheckoutForms/CheckoutFormAccountStep"
// import CheckoutFormStepsLine from "./CheckoutForms/CheckoutFormStepsLine"


const checkoutTransitions = {
    [CheckoutStepStatus.ACCOUNT]: {
        'prev': null,
        'next': CheckoutStepStatus.SHIPPING
    },
    [CheckoutStepStatus.SHIPPING]: {
        'prev': CheckoutStepStatus.ACCOUNT,
        'next': CheckoutStepStatus.BILLING
    },
    [CheckoutStepStatus.BILLING]: {
        'prev': CheckoutStepStatus.SHIPPING,
        'next': CheckoutStepStatus.REVIEW
    },
    [CheckoutStepStatus.REVIEW]: {
        'prev': CheckoutStepStatus.BILLING,
        'next': null
    }
}

export const CheckoutFormContainer:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const step  = useSelector<RootState, CheckoutStepStatus>(selectStep)
    const [counter, setCounter] = useState(0)
    console.log('CheckoutFormContainer')
    // Steps
        // Account, Shipping, Billing, Review
    // States
        // ValidForm/InvalidForm
            // Valid
                // accepted term and cond
                // correct inputs form data 
            // Invalid    
                // not accepted term and cond
                // incorrect inputs form data

    // localStoage.setItem('checkoutFormCurrentStep')
    // localStoage.setItem('checkoutFormAccountStep')
    // localStoage.setItem('checkoutFormShippingStep')
    // localStoage.setItem('checkoutFormBillingStep')
    // <CheckoutFormStepsLine step={step}/>
    
    const nextStepHandler = useCallback(() => {
        const nextStep = checkoutTransitions[step]['next']
        if(!nextStep) {
            return
        }
        
        dispatch(switchCurrentStep(nextStep))

    }, [step, dispatch])

    const prevStepHandler = useCallback(() => {
        const prevStep = checkoutTransitions[step]['prev']

        if(!prevStep) {
            return
        }

        dispatch(switchCurrentStep(prevStep))
    }, [step, dispatch])



    return (
        <div className="checkout-form">
            <CheckoutFormOnBaseStep step={step} />
            Current Step: {step}
            <CheckoutFormSwitchSteps 
                prevStepHandler={prevStepHandler} 
                nextStepHandler={nextStepHandler}  
            />
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
        </div>
    )

}

export default CheckoutFormContainer