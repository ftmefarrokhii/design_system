import { useEffect, useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

const Login =()=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredUsernameTouched,setEnteredUsernameTouched]=useState(false);
    const enteredUsernameIsVaLID = enteredUsername.trim() !== '';
    const nameInputIsInvalid = !enteredUsernameIsVaLID && enteredUsernameTouched;

    const [enteredPassword,setEnteredPassword]=useState('');
    const [enteredPasswordTouched,setEnteredPasswordTouched]=useState(false);
    const enteredPasswordIsVaLID = enteredPassword.trim().length >= 8;
    const enteredPasswordIsInVaLID = !enteredPasswordIsVaLID && enteredPasswordTouched;

    let formIsValid = false;

    //bejaye useeffect hamino bzarim kafiye
    if(enteredUsernameIsVaLID,enteredPasswordIsVaLID){
        formIsValid = true;
    }
   
    // useEffect(()=>{
    //     if(enteredUsernameIsVaLID,enteredEmailIsVaLID,...){
    //         setFormIsValid(true);
    //     }else{
    //         setFormIsValid(false)
    //     }
    // },[enteredUsernameIsVaLID,enteredEmailIsVaLID,...]);

    const submitHandler=(event)=>{
        event.preventDefault();
        setEnteredUsernameTouched(true);
        if(!enteredUsernameIsVaLID){
            return;
        }

        console.log(enteredUsername,enteredPassword);
        setEnteredUsername('');
        setEnteredUsernameTouched(false);
        setEnteredPassword('');
        setEnteredPasswordTouched(false)
    }
    const usernameonblurHandler=(event)=>{
        setEnteredUsernameTouched(true);
    }
    const passwordblurHandler=(event)=>{
        setEnteredPasswordTouched(true);
    }
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const passwordChangeHandler=(event)=>{
        setEnteredPassword(event.target.value);
    }

    return(
        <div className="file-upload">
        <h2 style={{textAlign:"center"}}>ورود</h2>
        <form onSubmit={submitHandler}>
            <div className="custom-form-group" >
            <input id="username" className="forminput" placeholder="یوزر نیم" type='text' value={enteredUsername} onBlur={usernameonblurHandler} onChange={usernameChangeHandler}></input>
            {nameInputIsInvalid && <p style={{color:"red"}}>username must not be empty</p>}
            </div>
            <div className="custom-form-group">
            <input id="password" className="forminput"  placeholder="کلمه عبور" type='password' value={enteredPassword} onBlur={passwordblurHandler} onChange={passwordChangeHandler}></input>    
            {enteredPasswordIsInVaLID && <p style={{color:"red"}}>password should be at least 8 char</p>}
            </div>
            <button type="submit" className="btn-submit">Submit</button>
            <div>اگر هنوز عضو نشده اید ، <Link to='/register' >ثبت نام </Link>کنید</div>

        </form>
        </div>

    )
}
export default Login;

        // <div className="logindiv">
        //     <p>ورود</p>
        //     <div className="formdiv">
        // <form onSubmit={submitHandler}>
        //     {/* <label htmlFor="username">username</label> */}
        //     <input id="username" className="forminput" placeholder="یوزر نیم" type='text' value={enteredUsername} onBlur={usernameonblurHandler} onChange={usernameChangeHandler}></input>
        //     {nameInputIsInvalid && <p style={{color:"red"}}>username must not be empty</p>}
        //     {/* <label htmlFor="email">email</label> */}
        //     <input id="email" className="forminput"  placeholder="ایمیل" type='email' value={enteredEmail} onBlur={emailblurHandler} onChange={emailChangeHandler}></input>
        //     {enteredEmailIsInvaLID && <p style={{color:"red"}}>email must contain @</p>}
        //     {/* <label htmlFor="phonenumber">phonenumber</label> */}
        //     <input id="number" className="forminput"  placeholder="شماره موبایل" type='number' value={enteredNumber} onBlur={numberblurHandler} onChange={numberChangeHandler}></input>
        //     {enteredNumberIsInvalid && <p style={{color:"red"}}>phone number must be 12 char</p>}
        //     {/* <label htmlFor="password">password</label> */}
        //     <input id="password" className="forminput"  placeholder="کلمه عبور" type='password' value={enteredPassword} onBlur={passwordblurHandler} onChange={passwordChangeHandler}></input>
        //     {enteredPasswordIsInVaLID && <p style={{color:"red"}}>password should be at least 8 char</p>}
        //     <button type='submit' className="submitbtn" disabled={!formIsValid}>submit</button>
        // </form>
        // </div>
        // </div>