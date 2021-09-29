import {Link,useHistory} from 'react-router-dom'
import React,{ useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
import {useState , useStateValue} from 'react'
import NavBar from '../NavBar/NavBar';
import {useCart,CartContext} from '../Context/Context'
// import Checkout from '../NoRequeridas/Checkout';
// import { AuthProvider,AuthContext } from '../NoRequeridas/Context'


function Cart(props) {
    // Variables + Funciones
    const {onAdd, onRemove, onAddFirst, id} = props;
    const {cartItems} = useContext(CartContext)
    const total = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    // const {currentUser} = useContext(AuthContext)
    // Logged in?
    // if (!currentUser) {
    //     return <Redirect to='/login'/>}
    
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
                                <button class='clasico'>Terminar mi Compra</button>
                            </Link>    
                        </div>
                    </div>
                )}
            </div> 
              
        )
}

export default Cart

