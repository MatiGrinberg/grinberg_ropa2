import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import './App.css'
import {useStateValue, AuthProvider,AuthContext } from './Context'
import Cart from './Cart'

// function Product({onAdd, id, image, title, price , desc, stock}) {
function Product(props) {
    // const product = {id} {image} {title} {price} {desc} {stock}
    // console.log(product)
    
    const {product, onAdd} = props
    const {currentUser} = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to='/login'/>}
    return (
    <div className='individual'>
        <div className='home_img'>
            <img src={product.image} alt='product'/> 
        </div>
        <div className='texto_prod'>
            <h3>{product.title}</h3>
            <h3>Precio: {product.price}</h3>
            <h3>{product.desc}</h3>
            <h3>Stock Max: {product.stock}</h3>
        </div>
        <button class='clasico' onClick={()=>onAdd(product)}>Agregar</button>
    </div>
    )
}

export default Product
