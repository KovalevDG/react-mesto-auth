import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ children }) => {
  return (
    children.props.loggedIn ? children : <Navigate to="/sign-in" replace/>
)}

export default ProtectedRouteElement;