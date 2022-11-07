import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"

import { 
    CheckoutFormState, 
    // AccountFormStep, 
    // BillingFormStep, 
    // ShippingFormStep,
    CheckoutStepStatus
} from "../../types"


const initialState: CheckoutFormState = {
    checkoutFormCurrentStep: {id: 2, name: CheckoutStepStatus.BILLING},
    checkoutFormAccountStep: { firstName: '', lastName: '' },
    checkoutFormBillingStep: { cardName: '', cardNumber: [], expireDate: '', cvvCode: 0 },
    checkoutFormShippingStep: { address: '', city: '', zipCode: '' }
}

const checkoutFormSlice = createSlice({
    name: 'checkoutForm',
    initialState: initialState,
    reducers: {
        switchCurrentStep: (state: CheckoutFormState, action: { payload: {id: number, name: CheckoutStepStatus} }) => {
            state.checkoutFormCurrentStep = action.payload
        },
        // fillAccoutFormStep: (state: CheckoutFormState, action: { payload: AccountFormStep }) => {
        //     state.checkoutFormAccountStep = action.payload
        // },
        // fillBillingFormStep: (state: CheckoutFormState, action: { payload: BillingFormStep }) => {
        //     state.checkoutFormBillingStep = action.payload
        // },
        // fillShippingFormStep: (state: CheckoutFormState, action: { payload: ShippingFormStep }) => {
        //     state.checkoutFormShippingStep = action.payload
        // }
    }
})


export const {
    switchCurrentStep, 
    // fillAccoutFormStep, 
    // fillBillingFormStep, fillShippingFormStep
} = checkoutFormSlice.actions

export default checkoutFormSlice.reducer