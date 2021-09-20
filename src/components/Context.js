import React,{useEffect,useContext, useState} from 'react'
import app from './Firebase'
import {auth} from './Firebase'


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





 
// export const Context = ({reducer, initialState,children})=>(
//     <StateContext.Provider value = {useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// export const useStateValue = ()=> useContext(StateContext);
