import {Link,useHistory} from 'react-router-dom'
import React,{ useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../estilados/App.css'
import {useState , useStateValue} from 'react'
import NavBar from './NavBar';
import Checkout from './Checkout';
import { AuthProvider,AuthContext } from './Context'


function ItemCount(props) {
    // Variables + Funciones
    const {cartItems, onAdd, onRemove} = props;
    const {currentUser} = useContext(AuthContext)
    const total = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    // Logged in?
    if (!currentUser) {
        return <Redirect to='/login'/>}
    
    // Return
    return (
            <div className='cart'>
                <h1>Items</h1>
                <div className="cart_text">
                    { cartItems.length===0 && <h2>No tenes items seleccionados</h2>}
                </div>
                <div className='subt'>
                    {cartItems.map((item)=>(
                        <div key={item.id} className='subt'>
                            <h3>{item.title}</h3>
                            <h3>{item.qty} x ${item.price}</h3>
                            <div>{ item.qty<10 &&<button className='btn_cart' onClick={()=>onAdd(item)}>+</button>}</div>
                            <div><button className='btn_cart' onClick={()=>onRemove(item)}>-</button></div>
                        </div>
                    ))}
                </div>
           
                {cartItems.length !== 0 && (
                    <div className='tot'>
                        <div >
                            <div className="col-2">
                                <strong>Total $</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>{total}</strong>
                            </div>
                        </div>
                            
                        <div >
                            <Link to='/checkout'>
                                <button class='clasico'>Checkout</button>
                            </Link>    
                        </div>
                    </div>
                )}
            </div> 
              
        )
}

export default ItemCount

