
import { useState, FC, useCallback } from "react"
import { CheckoutStepStatus, CheckoutFormStepsLineProps } from "../types"
import { useDispatch, useSelector } from "react-redux"
import CheckoutFormSwitchSteps from "./CheckoutForms/CheckoutFormSwitchSteps"
import { selectStep, AppDispatch, RootState } from '../store'
import { switchCurrentStep } from "../store/slices/checkoutFormSlice"
import CheckoutFormOnBaseStep from "./CheckoutForms/CheckoutFormOnBaseStep"
import { useForm, useFormState, FormProvider} from "react-hook-form"
import CheckoutFormStepsLine from "./CheckoutForms/CheckoutFormStepsLine"
// import CheckoutFormAccountStep from "./CheckoutForms/CheckoutFormAccountStep"
// import CheckoutFormStepsLine from "./CheckoutForms/CheckoutFormStepsLine"

const checkoutTransitions = {
    [CheckoutStepStatus.ACCOUNT]: {
        'prev': null,
        'next': {id: 1, name: CheckoutStepStatus.SHIPPING}
    },
    [CheckoutStepStatus.SHIPPING]: {
        'prev': {id: 0, name: CheckoutStepStatus.ACCOUNT},
        'next': {id: 2, name: CheckoutStepStatus.BILLING}
    },
    [CheckoutStepStatus.BILLING]: {
        'prev': {id: 1, name: CheckoutStepStatus.SHIPPING},
        'next': {id: 3, name: CheckoutStepStatus.REVIEW}
    },
    [CheckoutStepStatus.REVIEW]: {
        'prev': {id: 2, name: CheckoutStepStatus.BILLING},
        'next': null
    }
}

export const CheckoutFormContainer:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const step  = useSelector<RootState, CheckoutFormStepsLineProps['currentStep']>(selectStep)

    const {register, ...formMethods} = useForm({
        mode: 'all',
        defaultValues: {
            billingStep: {
                paymentMethod: 'with-card',
                cardNumber: {},
                saveCardInfo: 'saveCardInfo',
                termCond: ''
            },
        }

    })
    //const { errors } = useFormState({control})


    // pass register method into child form components

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
        const nextStep = checkoutTransitions[step.name]['next']
        
        if(!nextStep) {
            return
        }
        
        dispatch(switchCurrentStep(nextStep))

    }, [step, dispatch])

    const prevStepHandler = useCallback(() => {
        const prevStep = checkoutTransitions[step.name]['prev']

        if(!prevStep) {
            return
        }

        dispatch(switchCurrentStep(prevStep))
    }, [step, dispatch])



    return (
        <div className="checkout-form">
            <CheckoutFormStepsLine currentStep={step} />
            <div className="checkout-step">
                <h2 className='checkout-step__title'>Billing Information</h2>
                <FormProvider register={register} {...formMethods}>
                    <CheckoutFormOnBaseStep step={step.name} />
                </FormProvider>
            </div>
            <CheckoutFormSwitchSteps 
                prevStepHandler={prevStepHandler} 
                nextStepHandler={nextStepHandler}
            />
        </div>
    )

}

export default CheckoutFormContainer