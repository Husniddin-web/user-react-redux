// utils/Auth.jsx
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const isAuthenticated = localStorage.getItem("loggedInUser");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Auth;
