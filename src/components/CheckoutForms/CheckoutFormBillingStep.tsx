//import {useState} from 'react'
import { useFormContext, useWatch } from "react-hook-form"
import { ReactComponent as PaypalIcon } from '../../assets/images/PayPal.svg'

const CheckoutFormBillingStep = () => {
    const {register} = useFormContext()
    const paymentMethod = useWatch({name: "billingStep.paymentMethod"})

    return <>
            <div className="checkout-step__variant">
            <label className="variant-label card-variant__label">
                <input 
                type="radio"
                value="with-card"
                className="variant-label__input"
                {...register('billingStep.paymentMethod')}
                />
                <span className="variant-label__text">
                    Pay with Credit Card
                </span>
            </label>
            <label className="variant-label paypal-variant__label">
                <input 
                type="radio"
                value="with-paypal"
                className="variant-label__input"
                {...register('billingStep.paymentMethod')}
                />
                <span className="variant-label__text">
                    <PaypalIcon />
                </span>
            </label>
        </div>
        <form className="checkout-form__billing">
            { paymentMethod === 'with-card' ? <PayWithCardForm /> : <PayWithPaypal /> }
        </form>
        <div className="checkout-form__condition">
            <label className="codition-item">
                <input type="checkbox" {...register('billingStep.saveCardInfo')} value="saveCardInfo" className="condition-item__checkox"/>
                    Save information of this credit card
            </label>
            <label className="codition-item">
                <input type="checkbox" {...register('billingStep.termCond')} value="termCond" className="condition-item__checkox"/>
                I accept the <span>terms and comditions</span> and the <span>Privacy Policies</span>
            </label>
        </div>
    </>
}

function PayWithCardForm() { 
    
    const {register, handleSubmit, formState, setFocus, setValue, getValues} = useFormContext()

    //console.log('errors: ', formState?.errors)

    const reFocus = async (value: string, nextStep: string) => {
        if(value.length !== 4) {
            return false
        }

        setFocus(nextStep)
    }
    
    const changeField = (e: Event, id: any) => {
        const target = e.target as HTMLInputElement
        setValue(id, target.value.slice(0, 4))
    }

    return <>
        <div className="item-section top-section">
            <label className="item-label billing-form__label">
                Name on card
            </label>
            <div className="billing-form__items">
                <div className='billing-form__item'>
                    <input className="billing-form__input" type="text" placeholder="Placeholder Text"/>
                </div>
            </div>
        </div>

        <div className="item-section middle-section">
            <label className='item-label card-number__label'>
                Card Number
            </label>
            <div className="billing-form__items">
                <div className='billing-form__item'>
                    <input 
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.cardNumber.first', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.cardNumber.first'),
                            validate: (value: string) => reFocus(value, 'billingStep.cardNumber.second'),
                        })}
                    />
                </div>
                <div className='billing-form__item'>
                    <input
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.cardNumber.second', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.cardNumber.second'),
                            validate: (value: string) => reFocus(value, 'billingStep.cardNumber.third')
                        })}  
                    />
                </div>
                <div className='billing-form__item'>
                    <input
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.cardNumber.third', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.cardNumber.third'),
                            validate: (value: string) => reFocus(value, 'billingStep.cardNumber.fourth')

                    })} />
                </div>

                <div className='billing-form__item'>
                    <input 
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.cardNumber.fourth', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.cardNumber.fourth'),
                            validate: (value: string) => reFocus(value, 'billingStep.expireData'),
                    })} />
                </div>    
            </div>

        </div>
        <div className="item-section bottom-section">
            <div className="billing-form__items">
                <label className='item-label expire-date__label'>
                    Expire Date
                </label>
                <div className='billing-form__item'>
                    <input 
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.expireData', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.expireData'),
                            validate: (value: string) => reFocus(value, 'billingStep.cvvCode'),
                        })} />
                </div>

            </div>

            <div className="billing-form__items">
                <label className="item-label cvv-code__label">
                    CVV code
                    <span className="tooltip"></span>
                </label>
                <div className="billing-form__item">
                    <input 
                        className="billing-form__input" 
                        type="number"
                        {...register('billingStep.cvvCode', {
                            required: true, 
                            maxLength: 4, 
                            minLength: 4,
                            onChange: (e: Event) => changeField(e, 'billingStep.cvvCode')
                        })} 
                        />
                </div>
            </div>
        </div>    
    </>
}


function PayWithPaypal() {
    return <>
        PayWithPaypalForm
    </>
}

export default CheckoutFormBillingStep