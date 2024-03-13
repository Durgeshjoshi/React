import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from '../context/authContext';




export const ProtectRoute = ({ children }) => {

  const {currentUser} = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
