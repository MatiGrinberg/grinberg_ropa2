import React,{ useContext,useState } from 'react'
import {Redirect} from 'react-router-dom'
import './App.css'
import NavBar from './Header'
import { AuthProvider,AuthContext,useAuth } from './Context'
import Cart from './Cart'
import {db} from './Firebase'
import {Link,useHistory} from 'react-router-dom'

function Checkout(props) {
    const [compras,setCompras] = useState([]);
    const {cartItems,setCartItems} = props;
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    
    if (!currentUser) {
        return <Redirect to='/login'/>}

    const baseDeDatos = (e)=>{
        // initial = []
        e.preventDefault();
        const { direccion, email } = e.target.elements;
        const dire = direccion.value;
        const mail = email.value;

        db.collection("orders").add({usuario: mail, direcc: dire, articulos:cartItems, createdAt: new Date()})
        const comprasArray = []
        db.collection("orders").where('createdAt','<',new Date()).limit(1).orderBy("createdAt", "desc").get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
            comprasArray.push(doc.id)
            setCompras(comprasArray)
            setTimeout(() => {
            logout()
            }, 5000);
            })
        })
        
        
    }
       
    return(
        <div>
            <form className='compra' onSubmit={baseDeDatos}>
            <div>
                <label>
                Direccion
                <input name="direccion" type="text" placeholder="" />
                </label>  
            </div>
            <div>
                <label>
                e-Mail
                <input name="email" type="email" placeholder={currentUser.email} required/>
                </label>
            </div>
            <div>
                <button className='clasico' type="submit">Comprar</button>
            </div>
            </form>
            {/* <Cart cartItems={cartItems}/> */}
            {/* <div>{ (i) &&
                }
            </div> */}
            <div className='compra_end'>
                <h2>Tu ID de compra es:</h2>
                <div className='compra_id'><h3>{compras.at(-1)}</h3></div>
                {/* <h3>{c}</h3> */}
                <h4>- segun Firestore</h4>
            </div>
        </div>
        
    )
    // const [{canasto}] = useStateValue();
    // return (
    //     <div>
    //         <div className='checkout'>
    //             <div className='left'>
    //                 {
    //                     canasto.length === 0 ?(
    //                         <div><h2 className='checkout_title'>No tenes productos</h2></div>

    //                     ):(
    //                         <div>
    //                             canasto.map((item) =>(
    //                                 <Cart
    //                                     id={item.id}
    //                                     title={item.title}
    //                                     price={item.price}
    //                                 />                                    
    //                             ))
    //                         </div>

    //                     )
    //                 }
                    
    //             </div>
    //             <div className='right'>
    //                 <Subtotal/>
    //             </div>
    //         </div>
    //     </div>
        
    // )
}

export default Checkout
