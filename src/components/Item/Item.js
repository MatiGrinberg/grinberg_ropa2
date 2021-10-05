import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
// import {useStateValue, AuthProvider,AuthContext } from '../NoRequeridas/Context'
import ItemCount from '../ItemCount/ItemCount'
import {Link,useHistory} from 'react-router-dom'

function Item(props) {
    // Variables    
    const {product} = props
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
        </div>
    </div>
    )
}

export default Item
