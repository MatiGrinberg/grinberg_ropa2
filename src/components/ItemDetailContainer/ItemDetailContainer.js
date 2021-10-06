import React, {useContext, useState , useEffect} from 'react'
// import data from '../../data'
import ItemDetail from '../ItemDetail/ItemDetail'
import {Link,Redirect, useHistory} from 'react-router-dom'
import '../../estilados/App.css'
// import {useStateValue, AuthProvider,AuthContext } from '../NoRequeridas/Context'

function ItemDetailContainer(props) {
    // Almacenamiento de productos
    const {products} = props;
    const [product, setProducts] = useState([]);
   
   
    // Promise
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
        })

        promise.then(result =>setProducts(products)) 

    // Logged in?
    // const {currentUser} = useContext(AuthContext)
    // if (!currentUser) {
    //     return <Redirect to='/login'/>}
    
    return (
        <div>
            <h1 className='cat'>Categorias</h1>
            {product.map((individual) => (
                <Link to={'/'+individual.link+'/'+individual.link} className='header_link'>
                <button className= 'cat'>{individual.link}</button>
                </Link>))
            }
        </div>
    )
}

export default ItemDetailContainer
