import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './Context'

function NavBar() {
    const [{canasto},dispatch] = useStateValue();
    return (
        <nav className='header'>
            <Link to='/' className='header_link'>
                <img className="logo" src='/Assets/Logo.jpeg' alt='logo'></img>
            </Link>
            <Link to='/' className='header_link'>
                <h1 className='nombreNegocio'>Grinberg_Ropa</h1>
            </Link>
            <div className='navBar'>
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Sign in </span>            
                    </div>    
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Sign out </span>            
                    </div>    
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Zapato </span>            
                    </div>    
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Campera</span>            
                    </div>    
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Cart </span>            
                    </div>    
                </Link> 
                <Link to='/checkout' className='header_link'>
                    <div className='header_basket'>
                        <ShoppingBasketIcon/>            
                        <span className='basketCount'>{canasto? canasto.length:0}</span>
                    </div>    
                </Link> 
            </div>
            
        </nav>
    )
}

export default NavBar
