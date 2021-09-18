import './App.css'
import {Link,useHistory} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './Context'
import app from './Firebase'
import firebase from 'firebase/app';
// import {auth} from './Context'
import { withRouter, Redirect } from "react-router";
import React, {useState, useCallback } from "react";
import {useAuth} from './Context'
import {AuthProvider} from './Context'
import {auth} from './Firebase'
// import {setCurrentUser} from './Context'
// import Logout from './Logout'




function NavBar(prop) {
    
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        await logout()
        history.push('/login')
    }

    return (
        
          
        <nav className='header'>
            <Link to='/' className='header_link'>
                <img className="logo" src='/Assets/Logo.jpeg' alt='logo'></img>
            </Link>
            <Link to='/' className='header_link'>
                <h1 className='nombreNegocio'>Grinberg_Ropa</h1>
            </Link>
            <div className='navBar'>
                <Link to='/zapato' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Zapato </span>            
                    </div>    
                </Link>
                <Link to='/campera' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Campera</span>            
                    </div>    
                </Link>
                <Link to='/cart' className='header_link'>
                    <div className='header_basket'>
                        <ShoppingBasketIcon/>            
                        <span className='basketCount'>{prop.countCartItems}</span>
                        {/* <span className='basketCount'>{canasto? canasto.length:0}</span> */}
                    </div>    
                </Link>
                <button onClick={handleLogout}>Sign out</button>
                {/* <button onClick={() => setCurrentUser(null)}>Sign out</button> */}
                {/* <Logout/> */}
                <div className='loggedin'>{currentUser && <p>{currentUser.email}</p>}</div>
                
            </div>
            
        </nav>
    );
}

export default NavBar
