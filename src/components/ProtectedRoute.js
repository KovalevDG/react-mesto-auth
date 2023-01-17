import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ children }) => {
  console.log(children.props.loggedIn);
  const loggedIn = false;
  return (
    children.props.loggedIn ? children : <Navigate to="/sign-in" replace/>
)}

export default ProtectedRouteElement;