import React, { useRef, useCallback } from "react";
import { withRouter } from "react-router";
// import app from "./Firebase";
import Login from "./Login";
import '../estilados/App.css'
import {Link, useHistory} from 'react-router-dom'

const SignUp = () => {
  // Variables
  const history = useHistory()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef() 
  // Function
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password , password2} = event.target.elements;
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return alert('Passwords no son iguales')
    }
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  // Return
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" ref={passwordRef} placeholder="Password" />
        </label>
        <label>
          Repeat Password
          <input name="password2" type="password" ref={passwordConfirmRef} placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
        <Link to='/login'>
            <div className='header_option'>
                <span className='header_option_lineOne'>Sign In</span>            
            </div>    
        </Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);