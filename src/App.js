import './estilados/App.css'
import data from './data'
import React, { useState, useContext} from 'react'
// import Login from './components/NoRequeridas/Login'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Signup from './components/NoRequeridas/Signup'
import Item from './components/Item/Item'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import Checkout from './components/NoRequeridas/Checkout'
// import PrivateRoute from './components/PrivateRoute'
import { AuthProvider,AuthContext, useCart, CartContext, CartProvider } from './components/Context/Context';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import app from './components/NoRequeridas/Firebase'


function App() {
  // Variables
  
  const { products } = data;
  
  const zapato = products[0]
  const campera = products[1]
  
  // useState
  
  const {cartItems, setCartItems} = useContext(CartContext);  
  const count = cartItems.reduce((a, c) => a + c.qty , 0)

// Funciones
const onAddFirst = (product) =>{
  const exist = cartItems.find(item =>item.id === product.id)
  if(exist){ }
  else{setCartItems([...cartItems,{...product, qty:1}])}
}

const onAdd = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

const onRemove = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      )
    );
  }
};


//  Return  
  return (
    // <AuthProvider>
    // <CartProvider>
      <Router>
          <div className="App">
              <Route exact path="/category">
                <ItemDetailContainer onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} cartItems={cartItems} products={products}/>
              </Route>
              <Route exact path="/">
                <NavBar countCartItems={count}/>
                <ItemListContainer onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems}/>
              </Route>
              <Route path="/zapato/zapato">
                <NavBar countCartItems={count}/>
                <ItemDetail prod={zapato} id={'1'} onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems} desc='zapatos cuero vacuno negro 100% argentino' image='/Assets/zapatosCuero.jpeg' price={100}/>
              </Route>
              <Route path="/campera/campera">
                <NavBar countCartItems={count}/>
                <ItemDetail prod={campera} id={'2'} onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems} desc='campera cuero ovino negro 100% argentino' image='/Assets/camperaCuero.jpeg' price={500}/>
              </Route>
              {/* <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
              <Route path="/checkout">
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <Checkout cartItems={cartItems}  setCartItems={setCartItems} />
              </Route>*/}
              <Route path="/cart">
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <Cart cartItems={cartItems}  onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} setCartItems={setCartItems} />
              </Route> 
          </div>
      </Router>
    // </CartProvider>
    // </AuthProvider> 
    
    
  );
};



export default App
