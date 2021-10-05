import React,{useEffect,useContext, useState} from 'react'
import app from '../Firebase/Firebase'
import {auth} from '../Firebase/Firebase'


// CartContext
export const CartContext = React.createContext(); 

export function useCart() {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) =>{

const [cartItems,setCartItems] = useState([]);

  return(
    <CartContext.Provider
      value={
        {cartItems, setCartItems}
        // {provided}
      }>
      {children}
    </CartContext.Provider>
  )
}














// Auth Context (no necesario)
export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
    return unsubscribe
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    
    <AuthContext.Provider
      value={{
        currentUser,logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

