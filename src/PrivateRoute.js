import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Context";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props =>{
        return currentUser ? 
          <RouteComponent {...props} />
        : 
          <Redirect to="/login"/>
        
      }}
    ></Route>
  );
};


export default PrivateRoute