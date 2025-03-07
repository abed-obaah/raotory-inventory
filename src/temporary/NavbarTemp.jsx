import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>My App</h1>
      <div className="flex space-x-4">
        {user ? (
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="bg-green-500 px-4 py-2 rounded">Login</a>
            <a href="/register" className="bg-blue-500 px-4 py-2 rounded">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;