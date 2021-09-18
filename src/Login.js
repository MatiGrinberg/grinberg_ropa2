import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Firebase.js";
import './App.css'
import { AuthContext } from "./Context.js";
import {Link,useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }



  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <Link to='/signup'>
            <div className='header_option'>
                <span className='header_option_lineOne'>Sign Up</span>            
            </div>    
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
