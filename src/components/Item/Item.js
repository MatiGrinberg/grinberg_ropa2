import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
// import {useStateValue, AuthProvider,AuthContext } from '../NoRequeridas/Context'
import ItemCount from '../ItemCount/ItemCount'
import {Link,useHistory} from 'react-router-dom'

function Item(props) {
    // Variables    
    const {product, onAdd} = props
    // const {currentUser} = useContext(AuthContext)
    // Logged in?
    // if (!currentUser) {
    //     return <Redirect to='/login'/>}
    // Return
    return (
    <div className='individual'>
        <div className='home_img'>
            <Link to={'/'+product.link+'/'+product.link} className='header_link'>
            <img className='home_img' src={product.image} alt='product'/>
            </Link>
        </div>
        <div className='texto_prod'>
            <Link to={'/'+product.link+'/'+product.link} className='header_link'>
            <h3>{product.title}</h3>
            </Link>
            {/* <h3>Precio: {product.price}</h3>
            <h3>{product.desc}</h3>
            <h3>Stock Max: {product.stock}</h3> */}
        </div>
        <button class='clasico' onClick={()=>onAdd(product)}>Agregar</button>
    </div>
    )
}

export default Item
