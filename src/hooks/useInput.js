import { useState } from "react";


const useInput = (validateValue) => {
    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIsTouched]=useState(false);
    const valueIsVaLID = validateValue(enteredValue);
    const hasError = !valueIsVaLID && isTouched;

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler=(event)=>{
        setIsTouched(true);
    }
    const reset = ()=>{
        setEnteredValue('');
        setIsTouched(false);
    };

    return{
        value:enteredValue,
        isValid:valueIsVaLID,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };

}
export default useInput;