import { useEffect, useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import SabtKala from "./SabtKala";

const Login =()=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredUsernameTouched,setEnteredUsernameTouched]=useState(false);
    const enteredUsernameIsVaLID = enteredUsername.trim() !== '';
    const nameInputIsInvalid = !enteredUsernameIsVaLID && enteredUsernameTouched;

    const [enteredPassword,setEnteredPassword]=useState('');
    const [enteredPasswordTouched,setEnteredPasswordTouched]=useState(false);
    const enteredPasswordIsVaLID = enteredPassword.trim().length >= 8;
    const enteredPasswordIsInVaLID = !enteredPasswordIsVaLID && enteredPasswordTouched;

    const [admin,setAdmin]=useState(false);

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
        if(enteredUsername === "admin" && enteredPassword==="12345678"){
            console.log("its admin");
            setAdmin(true);
        }
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
            <Link to='/admin'><button type="submit" className="btn-submit">Submit</button></Link>
            {/* {admin && <Link to='/admin'><SabtKala></SabtKala></Link>} */}
            
            <div>اگر هنوز عضو نشده اید ، <Link to='/register' >ثبت نام </Link>کنید</div>

        </form>
        </div>

    )
}
export default Login;

       