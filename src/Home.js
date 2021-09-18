import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import app from './Firebase'
import Product from './Product'
import NavBar from './Header'
import Cart from './Cart'
import { AuthProvider,AuthContext } from './Context'



function Home(props) {
    const {products, cartItems, onRemove, onAdd, onAddFirst } = props;
    // const {add} = prop
    const {currentUser} = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to='/login'/>}
    return (
        <div className='home'>
            <NavBar countCartItems={cartItems.length}/>
            {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAddFirst}></Product>
            ))}
            {/* <Product onAdd={onAdd} id='1' stock={10} title='Zapatos_Cuero' price={100} desc='zapatos cuero vacuno negro 100% argentino' image='/Assets/zapatosCuero.jpeg' /> 
            <Product onAdd={onAdd} id='2' stock={10} title='Campera_Cuero' price={500} desc='campera cuero ovino negro 100% argentino' image='/Assets/camperaCuero.jpeg' /> */}
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>
    )
}

export default Home
