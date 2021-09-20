import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../estilados/App.css'
import {useStateValue, AuthProvider,AuthContext } from './Context'
import ItemCount from './ItemCount'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'

function Product(props) {
    
    // Logged in?
    const {currentUser} = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to='/login'/>}
    
    // Return
    return (
    <div className='individual'>
        <div className='home_img'>
            <img src={props.image} alt='product'/> 
        </div>
        <div className='texto_prod'>   
            <h2>{props.desc}</h2> 
            <h3>$ {props.price}</h3>           
        </div>
        <div>
            <Link to='/'>
            <button class='clasico'>Volver</button>
            </Link>
        </div>
    </div>
    )
}

export default Product
