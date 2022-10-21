import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"
import { ValidFormStateBySteps, CheckoutSteps, AccountFormStep, BillingFormStep, ShippingFormStep } from "../../types"
import { AppDispatch } from '../index'

const initialState: ValidFormStateBySteps = {
    checkoutFormCurrentStep: CheckoutSteps.ACCOUNT,
    checkoutFormAccountStep: { firstName: '', lastName: '' },
    checkoutFormBillingStep: { cardName: '', cardNumber: [], expireDate: '', cvvCode: 0 },
    checkoutFormShippingStep: { address: '', city: '', zipCode: '' }
}

const checkoutFormSlice = createSlice({
    name: 'checkoutForm',
    initialState: initialState,
    reducers: {
        switchCurrentStep: (state: ValidFormStateBySteps, action: { payload: CheckoutSteps.ACCOUNT }) => {
            state.checkoutFormCurrentStep = action.payload
        },
        fillAccoutFormStep: (state: ValidFormStateBySteps, action: { payload: AccountFormStep }) => {
            state.checkoutFormAccountStep = action.payload
        },
        fillBillingFormStep: (state: ValidFormStateBySteps, action: { payload: BillingFormStep }) => {
            state.checkoutFormBillingStep = action.payload
        },
        fillShippingFormStep: (state: ValidFormStateBySteps, action: { payload: ShippingFormStep }) => {
            state.checkoutFormShippingStep = action.payload
        }
    }
})


export const {
    switchCurrentStep, 
    fillAccoutFormStep, 
    fillBillingFormStep, fillShippingFormStep
} = checkoutFormSlice.actions

export default checkoutFormSlice.reducer