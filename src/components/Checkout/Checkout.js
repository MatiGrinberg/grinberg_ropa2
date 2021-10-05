import React,{ useContext,useState } from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
import NavBar from '../NavBar/NavBar'
import { AuthProvider,AuthContext,useAuth } from '../Context/Context'
import ItemCount from '../ItemCount/ItemCount'
import {db} from '../Firebase/Firebase'
import {Link,useHistory} from 'react-router-dom'

function Checkout(props) {
    
    // Variables
    // const {currentUser, logout} = useAuth()
    // const history = useHistory()
    const {cartItems,setCartItems} = props;

    // FireStore
    const [compras,setCompras] = useState([]);
    
    const baseDeDatos = (e)=>{
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
            // setTimeout(() => {
            // logout()
            // }, 5000);
            })
        }) 
    }
    
    // Logged in?
    // if (!currentUser) {
    // return <Redirect to='/login'/>}

    // Return 
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
                <input name="email" type="email" /*placeholder={currentUser.email}*/ required/>
                </label>
            </div>
            <div>
                <button className='clasico' type="submit">Comprar</button>
            </div>
            </form>
            <div className='compra_end'>
                <h2>Tu ID de compra es:</h2>
                <div className='compra_id'><h3>{compras.at(-1)}</h3></div>
                <h4>- segun Firestore</h4>
            </div>
        </div>
        
    )
}

export default Checkout
