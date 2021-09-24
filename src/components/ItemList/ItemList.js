import React, { useEffect, useContext,useState }  from 'react'
import {Redirect} from 'react-router-dom'
import app from '../NoRequeridas/Firebase'
import Item from '../Item/Item'
import NavBar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount'
// import { AuthProvider,AuthContext } from '../NoRequeridas/Context'
import {Link,useHistory} from 'react-router-dom'

function ItemList(props) {
   // Variables y Funciones
   const {products, cartItems, onRemove, onAdd, onAddFirst } = props;
//    const {currentUser} = useContext(AuthContext)
   const [productsDelay, setProductsDelay] =useState([])

    // Promise
    const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve()
    }, 2000);
    })
    
    promise.then(result =>setProductsDelay(products)) 

    // Logged in?
//    if (!currentUser) {
//        return <Redirect to='/login'/>}
    
//   Return
   return (
       <div className='home'>
            {/* <NavBar countCartItems={cartItems.length}/> */}

            {productsDelay.map((product) => (
            
           <Item key={product.id} product={product} onAdd={onAddFirst}></Item>
           ))
            }
            
           <ItemCount onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
           </div>
   )  
} 

export default ItemList
