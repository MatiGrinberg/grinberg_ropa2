import '../../estilados/App.css'
import {Link,useHistory} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
// import app from '../NoRequeridas/Firebase'
import CartWidget from '../CartWidget/CartWidget'
// import firebase from 'firebase/app';
import { withRouter, Redirect } from "react-router";
import React, {useState, useCallback } from "react";
// import {useAuth, AuthProvider,useStateValue} from '../NoRequeridas/Context'
// import {auth} from '../NoRequeridas/Firebase'


function NavBar(prop) {
    // Variables
    // const {currentUser, logout} = useAuth()
    // const history = useHistory()
    // Funciones
    // async function handleLogout(){
    //     await logout()
    //     history.push('/login')
    // }

    // Return
    return (
          
        <nav className='header'>
            <Link to='/' className='header_link'>
                <img className="logo" src='/Assets/Logo.jpeg' alt='logo'></img>
            </Link>
            <Link to='/' className='header_link'>
                <h1 className='nombreNegocio'>Grinberg_Ropa</h1>
            </Link>
            <div className='navBar'>
                <Link to='/zapato/zapato' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Zapato </span>            
                    </div>    
                </Link>
                <Link to='/campera/campera' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Campera</span>            
                    </div>    
                </Link>
                <Link to='/category' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Categorias</span>            
                    </div>    
                </Link>
                <Link to='/cart' className='header_link'>
                    <div className='header_basket'>
                        <CartWidget countCartItems={prop.countCartItems} />
                    </div>    
                </Link>
                {/* <button onClick={handleLogout}>Sign out</button> */}
                {/* <div className='loggedin'>{currentUser && <p>{currentUser.email}</p>}</div> */}
            </div> 
        </nav>
    );
}

export default NavBar
