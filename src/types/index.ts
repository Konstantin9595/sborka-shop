export type MenuItem = {
    id: number,
    label: string,
    href: string,
}

export type MenuItems = {
    menuItems: MenuItem[]
}

export type AccountFormStep = {
    firstName: string
    lastName: string
}

export type ShippingFormStep = {
    address: string
    city: string
    zipCode: string
}

export type BillingFormStep = {
    cardName: string
    cardNumber: number[]
    expireDate: Date | string
    cvvCode: number
}

export enum CheckoutStepStatus {
    ACCOUNT = 'account',
    SHIPPING = 'shipping',
    BILLING = 'billing',
    REVIEW = 'review'
}

export type CheckoutFormState = {
    checkoutFormCurrentStep: CheckoutStepStatus.ACCOUNT | CheckoutStepStatus.BILLING | CheckoutStepStatus.REVIEW | CheckoutStepStatus.SHIPPING
    checkoutFormAccountStep: AccountFormStep
    checkoutFormShippingStep: ShippingFormStep
    checkoutFormBillingStep: BillingFormStep
}
