import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div className='login'>
            <div className='login_container'>
                <h3 className='signIn_signUpTitle'>Sign In</h3>
                <form>
                    <h3>E-mail</h3>
                    <input type="email"/>
                    <h3>Password</h3>
                    <input type="password"/>
                    <h3>Confirm Password</h3>
                    <input type="password"/>
                    <button type="submit" className='login_signinButton'>Sign In</button>
                    <button type="submit" className='login_signinButton'>Sign Up</button>
                    <Link to='/' className='header_link'>
                        <button type="submit" className='login_signinButton'>Volver</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
