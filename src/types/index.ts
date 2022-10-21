export interface MenuItem {
    id: number,
    label: string,
    href: string,
}

export interface MenuItems {
    menuItems: MenuItem[]
}

export interface AccountFormStep {
    firstName: string
    lastName: string
}

export interface ShippingFormStep {
    address: string
    city: string
    zipCode: string
}

export interface BillingFormStep {
    cardName: string
    cardNumber: number[]
    expireDate: Date | string
    cvvCode: number
}

export enum CheckoutSteps {
    ACCOUNT = 'account',
    SHIPPING = 'shipping',
    BILLING = 'billing',
    REVIEW = 'review'
}


export interface ValidFormStateBySteps {
    checkoutFormCurrentStep: CheckoutSteps
    checkoutFormAccountStep: AccountFormStep,
    checkoutFormShippingStep: ShippingFormStep,
    checkoutFormBillingStep: BillingFormStep
}