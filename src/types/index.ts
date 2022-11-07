export type MenuItem = {
    id: number
    label: string
    href: string
}

export type MenuItems = {
    menuItems: MenuItem[]
}

export type CartIconProps = {
    withBackground?: boolean
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
    checkoutFormCurrentStep: CheckoutFormStepsLineProps['currentStep']
    checkoutFormAccountStep: AccountFormStep
    checkoutFormShippingStep: ShippingFormStep
    checkoutFormBillingStep: BillingFormStep
}


export type CheckoutFormStepsLineProps = {
    currentStep: {id: number, name: CheckoutStepStatus.ACCOUNT | CheckoutStepStatus.BILLING | CheckoutStepStatus.REVIEW | CheckoutStepStatus.SHIPPING}
}

export type ProductItem = {
    title: string
    price: number
    image: {
        url: string
    }
    sku: string
    symbol: string
    currency: string
    gender: string,
    category: string
}

export type Products = {
    items: ProductItem[]
}

export type GrapqlProductsResponse = {
    data: {
        productCollection: {
            items: ProductItem[]
        }
    }
}