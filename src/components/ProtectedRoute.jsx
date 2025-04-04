import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // ✅ Redirect to login if no user is authenticated
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;