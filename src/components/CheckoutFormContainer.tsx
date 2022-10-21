
import { useState } from "react";
import CheckoutFormStepsLine from "./CheckoutForms/CheckoutFormStepsLine"
import { CheckoutSteps } from "../types";
import { useDispatch } from "react-redux";
//import { } from "../store/slices/checkoutFormSlice";
import {AppDispatch, RootState} from '../store'

export const CheckoutForm = () => {
    const dispatch = useDispatch<AppDispatch>()

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
    return <div className="checkout-form">
        {/* <CheckoutFormStepsLine step={currentStep}/> */}
    </div>

}

export default CheckoutForm