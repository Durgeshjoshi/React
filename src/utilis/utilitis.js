import { Navigate } from "react-router-dom";
const currentUser = false;

export const ProtectRoute = ({children}) => {
  if(!currentUser) {
   return <Navigate to="/login"></Navigate>
  }
  return children;
}
