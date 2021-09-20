import './estilados/App.css'
import data from './components/data'
import React, { useState,useContext } from 'react'
import Login from './components/Login'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Signup from './components/Signup'
import Item from './components/Item'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout'
// import PrivateRoute from './components/PrivateRoute'
import { AuthProvider,AuthContext } from './components/Context';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import app from './components/Firebase'


function App() {
  // Variables
  
  const { products } = data;
  
  
  // useState
  const [cartItems,setCartItems] = useState([]);
  
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
    <AuthProvider>
      <Router>
          <div className="App">
              <Route exact path="/category">
                <ItemDetailContainer products={products}/>
              </Route>
              <Route exact path="/">
                <ItemListContainer onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems}/>
              </Route>
              <Route path="/cart"> 
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <ItemCount onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}/>
              </Route>
              <Route path="/zapato/zapato">
                <NavBar/>
                <ItemDetail desc='zapatos cuero vacuno negro 100% argentino' image='/Assets/zapatosCuero.jpeg' price={100}/>
              </Route>
              <Route path="/campera/campera">
                <NavBar/>
                <ItemDetail desc='campera cuero ovino negro 100% argentino' image='/Assets/camperaCuero.jpeg' price={500}/>
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
