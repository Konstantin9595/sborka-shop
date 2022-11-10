import { ResultType } from "@remix-run/router/dist/utils"
import { FC, memo } from "react"
import { CheckoutFormStepsLineProps, CheckoutStepStatus } from "../../types"

const steps = [
    {id: 0, step: CheckoutStepStatus.ACCOUNT},
    {id: 1, step: CheckoutStepStatus.SHIPPING},
    {id: 2, step: CheckoutStepStatus.BILLING},
    {id: 3, step: CheckoutStepStatus.REVIEW},
]



const CheckoutFormStepsLine:FC<CheckoutFormStepsLineProps> = ({currentStep}) => {
    //console.log('CheckoutFormStepsLine')

    const complitedSteps = steps.slice(0, currentStep.id)

    const isComplited = (step: string) => {
        return complitedSteps.filter((el: {id: number, step: string}) => el.step === step).length
    }

    const addClass = (step: string) => {

        // console.log("complitedSteps: ", complitedSteps, "isComplited: ", isComplited(step), "step: ", step)

        if(step === currentStep.name) {
            return 'active-step'
        }

        if(isComplited(step)) {
            return 'complited-step'
        }

        return '' 
    }

    return <div className="checkout-form__steps">
            {steps.map(({id, step}, ndx) => {
                return <div key={id} className={`checkout-form__step ${addClass(step)}`}>
                    <span className="step-name">
                        {step}
                    </span>
                    <div className="step-number">
                        {ndx + 1}
                    </div>
                </div>
            })}
    </div>
}

export default CheckoutFormStepsLine