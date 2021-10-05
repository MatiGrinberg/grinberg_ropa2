import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
// import app from "./Firebase.js";
import '../estilados/App.css'
import { AuthContext } from "./Context.js";
import {Link,useHistory} from 'react-router-dom'

const Login = () => {
  // Variables
  const history = useHistory()
  const { currentUser } = useContext(AuthContext);
  // Funciones
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

  // Logged in?
  if (currentUser) {
    return <Redirect to="/" />;
  }

  // Return?
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
