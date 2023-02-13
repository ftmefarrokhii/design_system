import "../styles/Register.css";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

const Register=()=>{
    const { value:enteredUsername , 
            isValid:enteredUsernameIsVaLID,
            hasError:usernameHasError,
            valueChangeHandler:usernameChangeHandler,
            inputBlurHandler:usernameBlurHandler,
            reset:resetEnteredUsername,
        } = useInput(value=> value.trim() !== '');

        const { value:enteredEmail , 
            isValid:enteredEmailIsVaLID,
            hasError:emailHasError,
            valueChangeHandler:emailChangeHandler,
            inputBlurHandler:emailBlurHandler,
            reset:resetEnteredEmail,
        } = useInput(value=> value.includes('@'));

        const { value:enteredNumber , 
            isValid:enteredNumberIsVaLID,
            hasError:numberHasError,
            valueChangeHandler:numberChangeHandler,
            inputBlurHandler:numberBlurHandler,
            reset:resetEnteredNumber,
        } = useInput(value=> value.trim().length === 11);

        const { value:enteredPassword , 
            isValid:enteredPasswordIsVaLID,
            hasError:passwordHasError,
            valueChangeHandler:passwordChangeHandler,
            inputBlurHandler:passwordBlurHandler,
            reset:resetEnteredPassword,
        } = useInput(value=> value.trim().length >= 8);


    let formIsValid = false;

    if(enteredUsernameIsVaLID && enteredEmailIsVaLID && enteredNumberIsVaLID && enteredPasswordIsVaLID){
        formIsValid = true;
    }
   
    const submitHandler=(event)=>{
        event.preventDefault();
       
        if(!formIsValid){
            return;
        }
        console.log(enteredUsername,enteredEmail,enteredNumber,enteredPassword);
        resetEnteredUsername();
        resetEnteredEmail();
        resetEnteredNumber();
        resetEnteredPassword();
    }

    return(
        <div className="file-upload">
        <h2 style={{textAlign:"center"}}>ثبت نام</h2>
        <form onSubmit={submitHandler}>
            <div className="custom-form-group" >
            <input id="username" className="forminput" placeholder="یوزر نیم" type='text' value={enteredUsername} onBlur={usernameBlurHandler} onChange={usernameChangeHandler}></input>
            {usernameHasError && <p style={{color:"red"}}>username must not be empty</p>}
            </div>
            <div className="custom-form-group">
            <input id="email" className="forminput"  placeholder="ایمیل" type='email' value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler}></input>
            {emailHasError && <p style={{color:"red"}}>email must contain @</p>}
            </div>
            <div className="custom-form-group">
            <input id="number" className="forminput"  placeholder="شماره موبایل" type='number' value={enteredNumber} onBlur={numberBlurHandler} onChange={numberChangeHandler}></input>       
            {numberHasError && <p style={{color:"red"}}>phone number must be 11 char</p>}
            </div>
            <div className="custom-form-group">
            <input id="password" className="forminput"  placeholder="کلمه عبور" type='password' value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler}></input>       
            {passwordHasError && <p style={{color:"red"}}>password should be at least 8 char</p>}
            </div>
            <button type="submit" className="btn-submit">Submit</button>
            <div>اگر قبلا عضو شده اید، <Link to='/login' > وارد </Link>شوید</div>

        </form>
        </div>

    )
}
export default Register;


// import { useEffect, useState } from "react";
// import "../styles/Register.css";
// import { Link } from "react-router-dom";

// const Register=()=>{
//     const [enteredUsername,setEnteredUsername]=useState('');
//     const [enteredUsernameTouched,setEnteredUsernameTouched]=useState(false);
//     const enteredUsernameIsVaLID = enteredUsername.trim() !== '';
//     const nameInputIsInvalid = !enteredUsernameIsVaLID && enteredUsernameTouched;


//     const [enteredEmail,setEnteredEmail]=useState('');
//     const [enteredEmailTouched,setEnteredEmailTouched]=useState(false);
//     const enteredEmailIsVaLID = enteredEmail.includes('@');
//     const enteredEmailIsInvaLID = !enteredEmailIsVaLID && enteredEmailTouched;


//     const [enteredNumber,setEnteredNumber]=useState('');
//     const [enteredNumberTouched,setEnteredNumberTouched]=useState(false);
//     const enteredNumberIsVaLID = enteredNumber.trim().length === 11 ;
//     const enteredNumberIsInvalid = !enteredNumberIsVaLID && enteredNumberTouched;


//     const [enteredPassword,setEnteredPassword]=useState('');
//     const [enteredPasswordTouched,setEnteredPasswordTouched]=useState(false);
//     const enteredPasswordIsVaLID = enteredPassword.trim().length >= 8;
//     const enteredPasswordIsInVaLID = !enteredPasswordIsVaLID && enteredPasswordTouched;

//     let formIsValid = false;

//     //bejaye useeffect hamino bzarim kafiye
//     if(enteredUsernameIsVaLID,enteredEmailIsVaLID,enteredNumberIsVaLID,enteredPasswordIsVaLID){
//         formIsValid = true;
//     }
//     // if(enteredUsernameIsVaLID,enteredEmailIsVaLID,....){
//     //     formIsValid = true;
//     // }
   
//     // useEffect(()=>{
//     //     if(enteredUsernameIsVaLID,enteredEmailIsVaLID,...){
//     //         setFormIsValid(true);
//     //     }else{
//     //         setFormIsValid(false)
//     //     }
//     // },[enteredUsernameIsVaLID,enteredEmailIsVaLID,...]);

//     const submitHandler=(event)=>{
//         event.preventDefault();
//         setEnteredUsernameTouched(true);
//         if(!enteredUsernameIsVaLID){
//             return;
//         }
        
//         console.log(enteredUsername,enteredEmail,enteredNumber,enteredPassword);
//         setEnteredUsername('');
//         setEnteredUsernameTouched(false);
//         setEnteredEmail('');
//         setEnteredEmailTouched(false);

//         setEnteredNumber('');
//         setEnteredNumberTouched(false);
//         setEnteredPassword('');
//         setEnteredPasswordTouched(false)
//     }
//     const usernameonblurHandler=(event)=>{
//         setEnteredUsernameTouched(true);
//     }
//     const emailblurHandler=(event)=>{
//         setEnteredEmailTouched(true);
//     }
//     const numberblurHandler=(event)=>{
//         setEnteredNumberTouched(true);
//     }
//     const passwordblurHandler=(event)=>{
//         setEnteredPasswordTouched(true);
//     }
//     const usernameChangeHandler=(event)=>{
//         setEnteredUsername(event.target.value);
//     }
//     const emailChangeHandler=(event)=>{
//         setEnteredEmail(event.target.value);
//     }
//     const numberChangeHandler=(event)=>{
//         setEnteredNumber(event.target.value);
//     }
//     const passwordChangeHandler=(event)=>{
//         setEnteredPassword(event.target.value);
//     }

//     return(
//         <div className="file-upload">
//         <h2 style={{textAlign:"center"}}>ثبت نام</h2>
//         <form onSubmit={submitHandler}>
//             <div className="custom-form-group" >
//             <input id="username" className="forminput" placeholder="یوزر نیم" type='text' value={enteredUsername} onBlur={usernameonblurHandler} onChange={usernameChangeHandler}></input>
//             {nameInputIsInvalid && <p style={{color:"red"}}>username must not be empty</p>}
//             </div>
//             <div className="custom-form-group">
//             <input id="email" className="forminput"  placeholder="ایمیل" type='email' value={enteredEmail} onBlur={emailblurHandler} onChange={emailChangeHandler}></input>
//             {enteredEmailIsInvaLID && <p style={{color:"red"}}>email must contain @</p>}
//             </div>
//             <div className="custom-form-group">
//             <input id="number" className="forminput"  placeholder="شماره موبایل" type='number' value={enteredNumber} onBlur={numberblurHandler} onChange={numberChangeHandler}></input>       {enteredEmailIsInvaLID && <p style={{color:"red"}}>email must contain @</p>}
//             {enteredNumberIsInvalid && <p style={{color:"red"}}>phone number must be 11 char</p>}
//             </div>
//             <div className="custom-form-group">
//             <input id="password" className="forminput"  placeholder="کلمه عبور" type='password' value={enteredPassword} onBlur={passwordblurHandler} onChange={passwordChangeHandler}></input>       {enteredEmailIsInvaLID && <p style={{color:"red"}}>email must contain @</p>}
//             {enteredPasswordIsInVaLID && <p style={{color:"red"}}>password should be at least 8 char</p>}
//             </div>
//             <button type="submit" className="btn-submit">Submit</button>
//             <div>اگر قبلا عضو شده اید، <Link to='/login' > وارد </Link>شوید</div>

//         </form>
//         </div>

//     )
// }
// export default Register;