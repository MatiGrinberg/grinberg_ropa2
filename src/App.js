import './App.css'
import data from './data'
import React, { useState,useContext } from 'react'
import Login from './Login'
import Cart from './Cart'
import Home from './Home'
import Signup from './Signup'
import Product from './Product'
import ProductOnly from './ProductOnly'
import Checkout from './Checkout'
import PrivateRoute from './PrivateRoute'
import { AuthProvider,AuthContext } from './Context';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import NavBar from './Header'
import app from './Firebase'


function App() {
  const { products } = data;
  const [cartItems,setCartItems] = useState([]);
  
  // const {currentUser} = useContext(AuthContext)

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
  
  return (
    <AuthProvider>
      <Router>
          <div className="App">
              <Route exact path="/">
                <Home onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems}/>
              </Route>
              <Route path="/cart"> 
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <Cart onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}/>
              </Route>
              <Route path="/zapato">
                <NavBar/>
                <ProductOnly desc='zapatos cuero vacuno negro 100% argentino' image='/Assets/zapatosCuero.jpeg'/>
                {/* <Product onAdd={onAdd}/> */}
              </Route>
              <Route path="/campera">
                <NavBar/>
                <ProductOnly desc='campera cuero ovino negro 100% argentino' image='/Assets/camperaCuero.jpeg'/>
                {/* <Product onAdd={onAdd}/> */}
              </Route>
              <Route path="/login">
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
              </Route>
          </div>
      </Router>
    </AuthProvider> 
    
  );
};


export default App
