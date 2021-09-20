import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../estilados/App.css'
import {useStateValue, AuthProvider,AuthContext } from './Context'
import ItemCount from './ItemCount'

function Item(props) {
    // Variables    
    const {product, onAdd} = props
    const {currentUser} = useContext(AuthContext)
    // Logged in?
    if (!currentUser) {
        return <Redirect to='/login'/>}
    // Return
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

export default Item
