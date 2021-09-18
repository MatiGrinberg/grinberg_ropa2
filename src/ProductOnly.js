import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import './App.css'
import {useStateValue, AuthProvider,AuthContext } from './Context'
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'

// function Product({onAdd, id, image, title, price , desc, stock}) {
function Product({desc, image}) {
    // const product = {id} {image} {title} {price} {desc} {stock}
    // console.log(product)
    
    const {currentUser} = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to='/login'/>}
    return (
    <div className='individual'>
        <div className='home_img'>
            <img src={image} alt='product'/> 
        </div>
        <div className='texto_prod'>   
            <h2>{desc}</h2>            
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
